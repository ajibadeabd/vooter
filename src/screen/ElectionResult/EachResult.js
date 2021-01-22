import React from 'react'
// import styles from './styles'
import EachpersonResult from './EachpersonResult'
import { Text,View,StyleSheet, ScrollView,Image} from 'react-native'
export default function EachResult() {
    return (
        <View style={styles.result}>
          <ScrollView>  
        <View style={styles.each}>
        <Text style={styles.title}>President</Text>

            <EachpersonResult />
            <EachpersonResult />
            <EachpersonResult />
            <EachpersonResult />
            
        </View>

                    
        <View style={styles.each}>
        <Text style={styles.title}>President</Text>

            <EachpersonResult />
            <EachpersonResult />
            <EachpersonResult />
            <EachpersonResult />
            
        </View>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    result:{
flex:1,

    },
   each:
    {backgroundColor:'#6C63FF',
    padding:10,
    margin:10,

},
title:{
    color:'#fff',
    fontSize:30,
    paddingVertical:10,
    fontWeight:'bold',
    textAlign:'center',
}
   
})