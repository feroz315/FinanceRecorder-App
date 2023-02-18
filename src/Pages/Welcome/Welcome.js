import React,{useState } from 'react';
import {View, Text,ImageBackground,SafeAreaView,Dimensions,TouchableOpacity,ActivityIndicator} from 'react-native';
import styles from './style';

const {width, height} = Dimensions.get('window');


const WelcomeScreen = ({ navigation }) => {

 
return (
      
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.container}>
           <ImageBackground source={require("../../Images/WelcomeScreen/Welcome/1.png")} resizeMode='cover' style={styles.image}>
           <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.viewbtn}>
              <Text style={styles.btntext}>Create account</Text> 
              </TouchableOpacity>
              
              <View style={styles.viewacount}>
              <Text style={styles.acouttext}>Have an acoount?</Text>
              
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logintext}> Login</Text>
             </TouchableOpacity>
             </View>
             
             </ImageBackground>
             </View>
             </SafeAreaView>
             )
}



export default WelcomeScreen;
