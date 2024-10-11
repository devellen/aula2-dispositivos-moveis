import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/Login';
import CadastroScreen from './pages/Cadastro';
import EsqueceuScreen from './pages/EsqueceuSenha'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
