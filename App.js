// App.js
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesList from './CategoriesList';
import SousCategoriesList from './SousCategoriesList';
import ProductsList from './ProductsList';
import ProductDetailList from './ProductDetailList';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { ImageBackground, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ImageBackground
    style={styles.backgroundImage}
  >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesList} />
        <Stack.Screen name="SousCategories" component={SousCategoriesList} />
        <Stack.Screen name="Products" component={ProductsList} />
        <Stack.Screen name="ProductDetail" component={ProductDetailList} />
      </Stack.Navigator>
    </NavigationContainer>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  // Remplacez la propriété source par backgroundColor
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#00FFFF', // Couleur verte pâle
  },
});

export default App;
