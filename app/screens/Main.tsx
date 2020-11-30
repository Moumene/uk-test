import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product, { ProductType } from '../components/Product'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDataStyle: {
    fontSize: 12,
    color: '#5e5e5e',
    textAlign: 'center',
  }
})

const Main = () => {

  const products = [
    {
      id: '78e7d58f-b6ec-4701-b7fd-86968c53df89',
      name:
        'Product - NYHET 🔄 PopSockets - Chroma Splash gloss POPGRIP',
      priceUSD: 14.19,
      photos: [
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Chroma-Splash-Gloss_01_Top-View_RGB-600x600-1dd2e0d.png?v=1580077484',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Chroma-Splash-Gloss_02_Grip-Expanded_RGB-565x601-313519e.png?v=1580077490',
      ],
    },
    {
      id: '6e65cba9-8de6-4228-82f9-b065436dcc2b',
      name: 'Product - BESTSELGER! PopSockets POPWALLET+ Shadow Blue',
      priceUSD: 33.24,
      photos: [
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Shadow-Blue_02_Perspective_RGB-350x601-9d0f53a.png?v=1569786631',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Shadow-Blue_03_Detached_RGB-461x602-24ef778.png?v=1569786636',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Shadow-Blue_06_Grip_Metamorphic_Front_RGB-297x602-6ef6680.png?v=1569786757',
      ],
    },
    {
      id: '1a40fa52-d2c5-4c31-80be-82d364eda9bc',
      name:
        'Product - NYHET 🔄 PopSockets - Crack a Cold One POPGRIP',
      priceUSD: 19.20,
      photos: [
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Crack-A-Cold-One_01_Top-View.png?v=1555509081',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Crack-A-Cold-One_02_Grip-Expanded.png?v=1555509084',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Crack-A-Cold-One_03_Collapsed.png?v=1555509087',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Crack-A-Cold-One_05_Device-Black-Expanded.png?v=1555509089',
        'https://cdn.shopify.com/s/files/1/1097/9190/products/Crack-A-Cold-One_08_Top-Expanded.png?v=1555509091',
      ]
    },
  ]

  return (
    <View style={styles.container}>
      {products?.length <= 0 && <Text style={styles.noDataStyle}>No data...</Text>}
      <FlatList
        data={products}
        renderItem={({ item }: { item: ProductType }) => <Product {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e3e3e3' }} />}
      />
    </View>
  )
}

export default Main;
