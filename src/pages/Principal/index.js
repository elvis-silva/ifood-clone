import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import BannerItem from '../../components/BannerItem';
import RestaurantItem from '../../components/RestaurantItem';
import {
  SafeAreaView, ViewActivity, CategoryView, BannerView,
  ViewPrincipal, ViewRestaurants, TitleRestaurants,
  ButtonTypeSelect, TextTypeSelect, SelectType
} from './style';

export default function Principal() {

  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [type, setType] = useState('Entrega');

  useEffect(() => {

    async function getData() {

      try {
        
        const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
        const data = await response.json();

        setLoaded(true);
        setBanners(data.banner_principal);
        setCategories(data.categorias);
        setRestaurants(data.restaurantes);

      } catch (err) {
        
        Alert.alert('Error consulting: ' + err);

      }

    }

    getData();

  }, []);

  const ViewHome = (props) => {
    return (
      <ViewPrincipal>
        <SelectType>
          <ButtonTypeSelect onPress={() => setType('Entrega')}><TextTypeSelect selected={type == 'Entrega'}>Entrega</TextTypeSelect></ButtonTypeSelect>
          <ButtonTypeSelect onPress={() => setType('Retirada')}><TextTypeSelect selected={type == 'Retirada'}>Retirada</TextTypeSelect></ButtonTypeSelect>
        </SelectType>
        <CategoryView horizontal={true} showHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <CategoryItem key={category.id} photo={category.img_url} text={category.nome}/>
          ))}
        </CategoryView>
        <BannerView horizontal={true} showHorizontalScrollIndicator={false}>
          {banners.map(banner => (
            <BannerItem key={banner.id} photo={banner.banner_img_url}/>
          ))}
        </BannerView>
        <TitleRestaurants>Restaurantes</TitleRestaurants>
        <ViewRestaurants>
          {restaurants.map(restaurant => (
            <>
              <RestaurantItem 
                key={restaurant.id} 
                photo={restaurant.url_img} 
                name={restaurant.nome} 
                review={restaurant.nota} 
                category={restaurant.categoria} 
                distance={restaurant.distancia} 
                deliveryCost={restaurant.valor_frete} 
                deliveryTime={restaurant.tempo_entrega} 
              />
            </>
          ))}
        </ViewRestaurants>
      </ViewPrincipal>
    );
  }

  return (
    <>
      <StatusBar style='theme-dark' />
      <SafeAreaView>
        {loaded 
          ? 
          ( 
            <ViewHome /> 
          ) 
          : 
          (
            <ViewActivity>
              <ActivityIndicator color='#f0001a' size='large' />
              <Text>Carregando... {loaded}</Text>
            </ViewActivity>
          )
        }
      </SafeAreaView>
    </>
  );

}