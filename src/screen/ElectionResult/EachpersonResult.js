import React from 'react'
// import styles from './styles'
import { Ionicons } from '@expo/vector-icons'; 

import { Text,View,StyleSheet, Image} from 'react-native'
export default function EachResult() {
    return (
                <View style={styles.eachrole}>
<Ionicons
 name="person-circle" 
 size={62} color="#6C63FF" />
                    <View>
                <Text style={styles.name}>abdullah</Text>
                <Text style={styles.dept}>electronic and computer </Text>

                    </View>
                <Text style={styles.count}>50</Text>


                </View>
                
    )
}
const styles = StyleSheet.create({
    result:{
flex:1
    },
    role:{
        backgroundColor:'#6C63FF',
        margin:10,
        padding:10,
        borderRadius:5,


    },
    eachrole:{
        backgroundColor:'#fff',
        width:'90%',
        padding:7,
        marginHorizontal:'5%',
        margin:7,
        borderRadius:5,
        flexDirection:'row',
        height:80,
        alignItems:'center',
        justifyContent:'space-between'
     
    },
    count:{
        fontSize:30,
        color:'#6C63FF'
    },
    name:{
        fontSize:20,
        textTransform:'uppercase',
    },
    dept:{
      color:'grey'  
    },
    title:{
        color:'#fff',
        fontSize:30,
        paddingVertical:10,
        fontWeight:'bold',
        textAlign:'center',
    }
})