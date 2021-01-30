import React from "react";
import { Formik } from "formik";
import FlatBut from "./flatButton";
import * as yup from "yup";
import  Icon from "../../assets/icon.png";
import { TextInput,Text, View, StyleSheet, Button,
    Image, Keyboard } from "react-native";
    import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Form({navigation}) {
  return (
    
    <View 
    style={{ flex: 1,
    backgroungColor:'white' ,
    paddingTop:'9.4%',
    }}>
       <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    >
    <View style={styles.landingImage}>
    
     <Text
     style={{fontSize:40,color:'grey',
    marginVertical:56
    }}
     >
         Create Account 
     </Text>
    <TextInput
        style={{
          paddingVertical: "2.1%",
          borderWidth:1
          ,borderColor:'lightgrey',
          borderRadius:3,
          width:"73%",
          textAlign:'center',
          margin:"1.5%"
        }}
        placeholder="Enter student email address"
      />
      <TextInput
        style={{
          paddingVertical: "2.1%",
          borderWidth:1
          ,borderColor:'lightgrey',
          borderRadius:3,
          width:"73%",
          textAlign:'center',
          margin:"1.5%"
        }}
        placeholder="Enter matric number"
      />
      <TextInput
        style={{
          paddingVertical: "2.1%",
          borderWidth:1
          ,borderColor:'lightgrey',
          borderRadius:3,
          width:"73%",
          textAlign:'center',
          margin:"1.5%"
        }}
        placeholder="Enter faculty name"
      />
      <TextInput
        style={{
          paddingVertical: "2.1%",
          borderWidth:1
          ,borderColor:'lightgrey',
          borderRadius:3,
          width:"73%",
          textAlign:'center',
          margin:"1.5%"
        }}
        placeholder="Enter Department"
      />
       <TextInput
       style={{
        paddingVertical: "2.1%",
        borderWidth:1
        ,borderColor:'lightgrey',
        borderRadius:3,
        width:"73%",
        textAlign:'center',
        margin:"1.5%"
      }}
        placeholder="Enter password"
      />
       <TextInput
        style={{
          paddingVertical: "2.1%",
          borderWidth:1
          ,borderColor:'lightgrey',
          borderRadius:3,
          width:"73%",
          textAlign:'center',
          margin:"2%"
        }}
        placeholder="Confirm  password"
      />
    </View>
    <View
    style={{
        alignItems:'center',
    }}>
        <TouchableOpacity>

        <Text
     style={{
         fontSize:18,color:'white',
     backgroundColor:'#6C63FF',
     width:"100%",
     borderRadius:5,
     paddingHorizontal:"23%",
     paddingVertical:"6.5%",
     textAlign:'center',
     marginVertical:"6%",
     alignItems:'center'
        
        }}
    onPress={()=>{navigation.push('ConfirmationPage')}}


        >SIGN UP</Text>
        </TouchableOpacity>
      <Text
      style={{color:'grey',
    fontSize:15
    }}
    onPress={()=>{navigation.push('Login')}}

      >Already have an account ?
        <TouchableOpacity>

        <Text
          style={{color:'#6C63FF',
          fontSize:15
          }}>    login
      </Text>
      </TouchableOpacity>

      </Text>

    </View>
     </TouchableWithoutFeedback>
    </View>


  );
}

const styles = StyleSheet.create({
  
  error:{
      color:'crimson',
      textAlign:'center',
      paddingHorizontal:30,

  },
  landingImage:{
    //   padding:320,
      alignItems:'center'
  }
});
