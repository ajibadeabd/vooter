import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native'
import styles from './styles.jsx';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EachOngoing from './EachOngoing';

export default function HomeScreen({ navigation,route }) {
  // console.log(route.params.params)
    const result =[
      {id:'1',
        name:'LASUSU',
        stime:'10:00am',
        ftime:'10:00am',
      },
      {
        id:'2',
        name:'ESLASU',
        stime:'08:00am',
        ftime:'12:00pm',
      },
      {
        id:'3',
        name:'AGRIC',
        stime:'05:00am',
        ftime:'24:00pm',
      },
    ]
  return (
    <View style={styles.container}>
         <FlatList
            data={result}
            renderItem={({item})=><EachOngoing eachItem={item} navigation={navigation}/>}
            keyExtractor={(item)=>item.id} />
    </View>
  );
}
