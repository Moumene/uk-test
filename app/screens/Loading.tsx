import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { getAllProducts } from '../actions/products';
import { ProductType } from '../components/Product';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  errorMessageStyle: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center'
  },
  reloadButtonContainer: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  reloadText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    justifyContent: 'center',
  },
  inlineButton: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineButtonText: {
    fontSize: 12,
    color: '#5e5e5e',
  }
})

interface LoadingProps extends StateProps, DispatchProps {
  products: {
    loading?: boolean;
    errorMessage: string;
    items: ProductType[];
    currentItem: ProductType;
  };
  navigation: object;
}

const Loading = (props: LoadingProps) => {

  useEffect(() => {
    if (!props.products?.loading) {
      props.getAll();
    }
  }, []);

  const reload = () => {
    Promise.all([props.getAll()]).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  const navigateToMain = () => {
    props.navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      {props.products?.loading && <ActivityIndicator size="large" color="#ccc" />}
      {props.products?.errorMessage &&
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessageStyle}>An error occured, please try again later</Text>
          <TouchableOpacity style={styles.reloadButtonContainer} onPress={reload}>
            <Text style={styles.reloadText}>Reload</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inlineButton} onPress={navigateToMain}>
            <Text style={styles.inlineButtonText}>go to main anyway</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

const mapStateToProps = ({ products }: any) => ({
  products,
});

const mapDispatchToProps = {
  getAll: getAllProducts,
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
