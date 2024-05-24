// App.js

import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

// Model untuk produk
const products = [
  { 
    name: 'Produk A', 
    price: 10000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk B', 
    price: 20000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk C', 
    price: 30000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk D', 
    price: 40000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk E', 
    price: 50000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk F', 
    price: 60000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk G', 
    price: 70000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk H', 
    price: 80000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk I', 
    price: 90000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
  { 
    name: 'Produk j', 
    price: 10000, 
    image: 'https://img.freepik.com/free-photo/view-coffee-cup-with-copy-space_23-2150698795.jpg' 
  },
];

const App = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Rp {item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  product: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    margin: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;
