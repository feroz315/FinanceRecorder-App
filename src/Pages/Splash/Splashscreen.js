import React, { useEffect,useState }from 'react';
import {View,Text,Image, Dimensions,StyleSheet,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';

 const {width, height} = Dimensions.get('window');


const Splashscreen = ({ navigation }) => {
const [usename, setUsername] = useState("");




const handlerGetToken = async () => {
    let datatoken = await AsyncStorage.getItem('userdata')
    console.log("🚀 ~ file: Splashscreen.js:14 ~ getToken ~ token:", datatoken)
    if(!datatoken) {
      navigation.replace("Login")
    }else {
      navigation.replace("BottomNav")
    }
 };    
  


useEffect(() => {
 setTimeout(() => {
  handlerGetToken()
 }, 3000)
});



 return (
 <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
  <View style={styles.container}>
     <ImageBackground source={require("../../Images/Mask.png")} resizeMode='cover' style={styles.image}>
   
   <View style={{height:height * 0.30}}> 
      <Image source={require('../../Images/Logo.png')} style={{marginTop:5, resizeMode:'cover', }} />
     </View>
     <Image source={require('../../Images/Name.png')} style={{marginTop:5, resizeMode:'cover',marginLeft:90 }} />    
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
