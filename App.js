import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profile from './src/screen/Profile';
import BottomTabScreen from './src/navigation/BottomTabNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const StackNav= createStackNavigator() 
export default function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator  screenOptions={{ headerShown: false }}>
         <StackNav.Screen  name="Home"component={BottomTabScreen}/>
         <StackNav.Screen name='Profile' component={Profile}/>
    </StackNav.Navigator>
    </NavigationContainer>

  );
}
