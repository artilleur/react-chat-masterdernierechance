// ProductEdit.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProductEdit = ({ route, navigation }) => {
  const { product } = route.params;
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleSaveChanges = () => {
    // Enregistrer les modifications et naviguer vers la page de détails mise à jour
    // Vous devrez implémenter la logique d'enregistrement des modifications ici
    // par exemple, en appelant une API pour mettre à jour le produit
    // après avoir enregistré les modifications, naviguer vers la page de détails mise à jour
    navigation.navigate('ProductDetail', { product: editedProduct });
  };

  return (
    <View style={styles.container}>
      <Text>Nom:</Text>
      <TextInput
        style={styles.input}
        value={editedProduct.nom}
        onChangeText={(text) => setEditedProduct({ ...editedProduct, nom: text })}
      />

      {/* Ajoutez d'autres champs d'édition pour d'autres propriétés du produit */}

      <Button title="Enregistrer les modifications" onPress={handleSaveChanges} />
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

export default ProductEdit;
