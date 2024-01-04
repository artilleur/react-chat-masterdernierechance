// ProductsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importez le hook useNavigation
import ProductDetailList from './ProductDetailList';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const ProductsList = ({ route }) => {
  const { sousCategorie } = route.params;
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();  // Utilisez le hook useNavigation pour obtenir l'objet navigation

  useEffect(() => {
    console.log('SousCategorie from route params:', sousCategorie);

    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:8000/api/produits?page=1`
        );

        setProducts(response.data['hydra:member']);
      } catch (error) {
        console.error('Error fetching all products', error);
      }
    };

    fetchAllProducts();
  }, [sousCategorie]);

  const filteredProducts = products.filter(
    (product) => product.sousCategorie === `/api/sous_categories/${sousCategorie.id}`
  );

  const handleProductPress = (product) => {
    // Navigate to the ProductDetailList screen with the selected product
    navigation.navigate('ProductDetail', { product });
  };
  const handleBackPress = () => {
    // Go back to the previous screen
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    categoryText: {
      fontSize: 35,
      backgroundColor: 'lightsalmon',
      width: 250,
      height: 100,
      textAlign: 'center', // Centrer le texte horizontalement
      lineHeight: 100, // Centrer le texte verticalement (en fonction de la hauteur du conteneur)
    },
  });
  
  return (
    <View style={{ alignItems: 'center', marginBottom: 120, marginTop: 50 }}>
      <TouchableOpacity onPress={handleBackPress}>
        <Text style={{ color: 'white', backgroundColor: 'red', padding: 10 }}>{'\n'} {'\n'} RETOUR SOUS_CATEGORIES {'\n'} {'\n'} </Text>
      </TouchableOpacity>
      <Text></Text>
      <Text style={styles.categoryText}>{sousCategorie.nom}</Text>
      <Text></Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(product) => product['@id']}
        renderItem={({ item: product }) => (
          <TouchableOpacity onPress={() => handleProductPress(product)}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <Image
                source={{
                  uri: `http://10.0.2.2:8000/images/${product.image}`,
                }}
                style={{ width: 150, height: 150 }}
              />
              <View style={{ alignItems: 'center', marginBottom: 10 }}></View>
              {/* <Text style={{ color: 'red' }}>NOM</Text> */}
              <Text style={{ backgroundColor:'lime', padding:8}}>{'\n'} {product.nom} {'\n'} </Text>
              <Text style={{ color: 'red' }}>PRIX {'\n'}</Text>
              <Text>{product.prix}€ {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} </Text>
              {/* <Text>{product.description} {'\n'} {'\n'} {'\n'} </Text> */}
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsList;
