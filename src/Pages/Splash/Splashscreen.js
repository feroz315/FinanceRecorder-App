import React, { useEffect }from 'react';
import {View,Text,Image, Dimensions,StyleSheet,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Group from '../../Images/Group.svg';

import AsyncStorage from '@react-native-async-storage/async-storage';

 const {width, height} = Dimensions.get('window');


const Splashscreen = () => {

// const getToken = async () =>{
//     var token = await AsyncStorage.getItem('usredata')
//     console.log("🚀 ~ file: Splashscreen.js:14 ~ getToken ~ token:", token)
// }    
//   // getToken().then(token => console.log(token)); // output '#your_secret_token'

// useEffect(() => {
//  getToken();
// }, []);



 return (
 <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
  <View style={styles.container}>
     <ImageBackground source={require("../../Images/Mask.png")} resizeMode='cover' style={styles.image}>
   
   <View style={{height:height * 0.3}}> 
      <Image source={require('../../Images/Logo.png')} style={{marginTop:5, resizeMode:'cover' }} />
     </View>
     <Image source={require('../../Images/Name.png')} style={{marginTop:5, resizeMode:'cover',marginLeft:100 }} />    
      </ImageBackground>
     </View>
     
   
</SafeAreaView>
       
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
 
    },
 
  });
  

export default Splashscreen;
