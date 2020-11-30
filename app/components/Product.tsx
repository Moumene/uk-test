import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export interface ProductType {
  id: string;
  name: string;
  priceUSD: number;
  photos: Array<string>;
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginVertical: 12,
    borderRadius: 8,
  },
  imageContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  imageStyle: {
    resizeMode: 'contain', 
    height: 300,
  },
  contentStyle: {
    position: 'absolute',
    bottom: 4,
    left: 26,
    right: 8,
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderRadius: 6,
  },
  nameStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 4,
    marginLeft: 4,
  },
  priceStyle: {
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: '#000',
    borderRadius: 6,
    marginRight: 4,
    padding: 2,
    paddingHorizontal: 4,
  }
})

const Product:  React.FC<ProductType> = (props) => {
  console.log('props', props);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{ uri: props?.photos?.[0] }} />
      </View>
      <View style={styles.contentStyle}>
        <Text style={styles.nameStyle} numberOfLines={2}>{props?.name}</Text>
        <Text style={styles.priceStyle}>{props?.priceUSD}</Text>
      </View>
    </View>
  )
}

export default Product;