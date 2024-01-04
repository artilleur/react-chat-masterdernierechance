import React from 'react';
import { View, Text, Image, ScrollView ,TouchableOpacity} from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { useNavigation } from '@react-navigation/native';

const ProductDetailList = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  let scale = 1;

  const onPinchGestureEvent = event => {
    scale = event.nativeEvent.scale;
  };

  const onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      // Do something when the pinch gesture ends
      // You can adjust the zoom factor as needed
      scale = Math.max(1, Math.min(scale, 2));
    }
  };
  const handleBackPress = () => {
    // Go back to the previous screen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 50 }}>
      <View style={{ alignItems: 'center', marginBottom: 'center' }}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={{ color: 'red' }}>RETOUR LISTE PRODUITS {'\n'} {'\n'} </Text>
        </TouchableOpacity>
      </View>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPinchHandlerStateChange}
      >
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Image
            source={{
              uri: `http://10.0.2.2:8000/images/${product.image}`,
            }}
            style={{ width: 150 * scale, height: 150 * scale }}
          />
          <View style={{ alignItems: 'center', marginVertical: 35, marginHorizontal: 20 }}>
            <Text style={{ color: 'red' }}>NOM</Text>
            <Text>{product.nom} {'\n'} </Text>
            <Text style={{ color: 'red' }}>PRIX {'\n'}</Text>
            <Text>{product.prix}€ {'\n'} {'\n'} {'\n'} </Text>
            
            <Text style={{ backgroundColor: 'lightblue', padding: 10 }}>
              {product.description} {'\n'} {'\n'} {'\n'}
            </Text>
          </View>
        </View>
      </PinchGestureHandler>
    </ScrollView>
  );
};

export default ProductDetailList;
