import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AjoutProduit = () => {
  const navigation = useNavigation();
  const [newProduct, setNewProduct] = useState({
    nom: '',
    prix: '',
    description: '',
    // Add other fields as needed
  });

  const handleSaveNewProduct = () => {
    // Implement logic to save the new product
    // You can make an API call to your server to save the new product
    // After saving, you may navigate to the product details or another screen
    // For example:
     navigation.navigate('ProductDetail', { product: newProduct });
  };

  const handleCancel = () => {
    // Navigate back or to any other screen as needed
    // For example, navigating back to the previous screen
     navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nom:</Text>
      <TextInput
        style={styles.input}
        value={newProduct.nom}
        onChangeText={(text) => setNewProduct({ ...newProduct, nom: text })}
      />
      <Text>PRIX:</Text>
      <TextInput
        style={styles.input}
        value={newProduct.prix}
        onChangeText={(text) => setNewProduct({ ...newProduct, prix: text })}
      />
      <Text>DESCRIPTION:</Text>
      <TextInput
        style={styles.input}
        value={newProduct.description}
        onChangeText={(text) => setNewProduct({ ...newProduct, description: text })}
      />

      {/* Add other input fields for additional properties of the product */}

      <Button title="Enregistrer le nouveau produit" onPress={handleSaveNewProduct} />
      <Button title="Annuler" onPress={handleCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AjoutProduit;
