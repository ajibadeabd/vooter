import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';
import Profile from './src/screen/Profile';
import Login from './src/screen/Login';
import Landing from './src/screen/landing';
import Register from './src/screen/Register';
import Otp from './src/screen/Otp';
import ConfirmationPage from './src/screen/thankYouPage';
import BottomTabScreen from './src/navigation/BottomTabNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const StackNav= createStackNavigator() 
export default function App() {
  const[auth,setAuth]=useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setAuth(true)
    }, 60000);
  })
  return(
    <NavigationContainer>
    {/* {auth==true? */}
    <AuthUser/>
    {/* // : */}
    {/* <NotAuthUser/> */}
    {/* } */}
    </NavigationContainer>
  )
}

const AuthUser = ()=>{
  return(
      <StackNav.Navigator  screenOptions={{ headerShown: false }}>
         <StackNav.Screen  name="Home"component={BottomTabScreen}/>
         <StackNav.Screen name='Profile' component={Profile}/>
    </StackNav.Navigator>
  )
}
const NotAuthUser = ()=>{
  const mmm=()=>{
    console.log('object')
    // setAuth(true)
  }

  return(
      <StackNav.Navigator  screenOptions={{ headerShown: false }}>
         <StackNav.Screen  name="Landing"component={Landing}/>
         <StackNav.Screen params={mmm} name="Login"component={Login}
          initialParams={{  mmm }}
          />
         <StackNav.Screen name='Register' component={Register}
         />
         <StackNav.Screen name='ConfirmationPage' component={ConfirmationPage}/>
         <StackNav.Screen name='Otp' component={Otp}/>
         
       </StackNav.Navigator>
  )
}