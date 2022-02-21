import React from "react";
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RestaurantView, RestaurantPhoto, RestaurantInfo } from './style';

const RestaurantItem = ({ photo, name, key, review, category, distance, deliveryCost, deliveryTime }) => {
  return (
    <RestaurantView key={key}>
      <RestaurantPhoto source={{
        uri: photo.trim(),
        width: 50,
        height: 50,
        resizeMode: 'cover'
      }}/>
      <RestaurantInfo>
        <Text>{name}</Text>
        <Text><AntDesign name='star' size={12} color='#f9a825'>{review} - {category} - {distance}</AntDesign></Text>
        <Text>{deliveryTime} • R$ {deliveryCost}</Text>
      </RestaurantInfo>
    </RestaurantView>
  );
}

export default RestaurantItem;