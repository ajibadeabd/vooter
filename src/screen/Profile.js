import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons,MaterialCommunityIcons,Feather,AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        
<Ionicons  name="people-circle-sharp"
onPress={()=>{navigation.navigate("Profile")}} 
 size={250} color='#6C63FF' />
      <Text style={styles.name}>Abdullah Ajibade</Text>
      <Text style={styles.emailcon}>
          <Text style={styles.email}>Email:</Text>
           Ajibadeabd@gmail.com</Text>
      {/* <StatusBar style="auto" /> */}
      <StatusBar style={{paddingTop:'10%'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:'10%'
    // justifyContent: 'center',
  },
  name:{
fontSize:20,
fontWeight:'bold',
margin:'2.5%',
// margin:10

  },
  emailcon:{
    fontSize:15,
    

  },
  email:{
      fontWeight:'bold'
  }
});



