import React from "react";
import { Formik } from "formik";
import FlatBut from "./flatButton";
import * as yup from "yup";
import  Icon from "../../assets/icon.png";
import { TextInput,Text, View, StyleSheet, Button,
    Image, Keyboard } from "react-native";
    import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

// export default function Form(props) {
//   console.log(props)
//   console.log('props')
  export default function Form({navigation, route}) {
  console.log('props')
  const change =()=>{
  //   route.params.change
  // route.params.mmm()

  }

  return (
    
    <View 
    style={{ flex: 1,
    backgroungColor:'white' ,
    paddingTop:'14.4%',
    }}>
       <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    >
    <View style={styles.landingImage}>
    <Ionicons name="checkmark-circle-sharp"
    size={150} color="lightgrey" />

     <Text
     style={{fontSize:50,
      marginBottom:'20%',
      color:'lightgrey'}}
     >
         Voteer
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
        placeholder="Enter student email address"
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
     paddingHorizontal:"27%",
     textAlign:'center',
     marginTop:"5%",
     alignItems:'center'
        
        }}
    onPress={change}
    


        >LOGIN</Text>
        </TouchableOpacity>

      <Text
      style={{color:'grey',
    fontSize:15
    }}
      >Don't have an account ?
        <TouchableOpacity>

        <Text
          style={{color:'#6C63FF',
          fontSize:15
          }}
    onPress={()=>{navigation.push('Register')}}
    >    register
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
