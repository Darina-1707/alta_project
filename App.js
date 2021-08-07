import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  HomePage  from './pages/Home';
import  OrderPage  from './pages/Orderpage';
import  BalancePage  from './pages/Balancepage';
import  ProfilePage  from './pages/Profilepage';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen screenOptions={{headerShown: null}} name="Home" component={HomePage} />
        <Stack.Screen screenOptions={{headerShown: null}} name="Order" component={OrderPage} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainbox: {
    width:"100%",
    height:"100%",
    backgroundColor:'#F5F5F5',
    display:'flex',
    alignItems:'center',
  },
  tipaimg: {
    width:"100%",
    height: 250,
    marginTop:100,
    display:'flex',
    justifyContent:'center', alignItems:'center'
  },
  input:{
    backgroundColor:'white',
    minWidth:350,
    height: 50,
    color:'#8A8A8A',
    marginTop:15,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  button:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#0085FF",
    height: 50,
    minWidth:350,
    marginTop:100,
    borderRadius:8,
    
  }
});

export default App;