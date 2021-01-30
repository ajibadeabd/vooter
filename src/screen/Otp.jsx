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
    justifyContent:'center',
    paddingTop:'14.4%',
    }}>
       <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    >
    <View style={styles.landingImage}>
    
     <Text
     style={{fontSize:50,
        textAlign:'center',
        color:'grey'}}
     >
Please input your OTP
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
        placeholder="Enter otp"
      />
    </View>
    <View
    style={{
        alignItems:'center',
    }}>
        <TouchableOpacity>

        <Text
     style={{
      fontSize:17,color:'white',
  backgroundColor:'#6C63FF',
  width:"100%",
 //  width:290,
  borderRadius:5,
  paddingVertical:"6.5%",
  paddingHorizontal:"25%",
  textAlign:'center',
  marginTop:"5%",
  alignItems:'center'
     
     }}
    onPress={()=>{navigation.push('Login')}}


        >confirm Otp</Text>
        </TouchableOpacity>
      <Text
      style={{color:'grey',
    fontSize:15
    }}
      >Otp expired ?
        <TouchableOpacity>

        <Text
          style={{color:'#6C63FF',
          fontSize:15
          }}>    Resend otp
      </Text>
      </TouchableOpacity>

      </Text>

    </View>
     </TouchableWithoutFeedback>
    </View>


  );
}

const styles = StyleSheet.create({
  
  landingImage:{
    //   padding:320,
      alignItems:'center'
  }
});
