import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Image, ButtonContainer } from './style'
import { Text } from 'react-native';

import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

const titleStyle = {
  fontWeight: 'bold',
  fontSize: 18
};

const textStyle = {
  fontWeight: 'bold',
  fontSize: 16
};

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style='theme-dark'/>
      <SafeAreaView>
        <View>
          <Text style={titleStyle}>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner}/>
          <Text style={textStyle}>Permitir Localização</Text>
          <Text>Para descobrir restaurantes perto de você</Text>
        </View>
        <ButtonContainer>
          <Button text='PULAR' onPress={() => navigation.navigate('Main')}/>
          <Button text='ENTRAR' theme='primary'/>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
