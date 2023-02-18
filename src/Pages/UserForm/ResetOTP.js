import React, { useState } from 'react';
import { TextInput, StatusBar, View, Text, SafeAreaView, Image, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './loginstyle';
import { apiCall } from '../../Connection/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width, height } = Dimensions.get('window');


const Resetscreen = ({ navigation }) => {
    const [ OTP, setOTP ] = useState("");
    const [Password, setPassword] = useState("");

    

    async function Reset()  {
        let data = {
            otp: OTP,
            password: Password
        }
        try{
            let result = await apiCall.restpassword(data)
            console.log("login", result.status);
             navigation.navigate('Login')
        }
        catch(error) {
            console.log("test", error)
   
        }
     
    }

    return (
        <SafeAreaView>
            <View style={{ width: "135%" }}>
                <ImageBackground source={require("../../Images/Login/Shape/Shape.png")} style={{ height: '100%' }} />
                <View style={{ position: "absolute" }}>

                    <TouchableOpacity style={{ marginTop: 30, marginLeft: 10 }} onPress={() => navigation.navigate('Forgot')}>
                        <AntDesign name="arrowleft" size={30} color="#000" />
                    </TouchableOpacity>

                    <View style={{ height: 100, marginHorizontal: 30 }}>
                        <Image source={require('../../Images/Login/Logo/Logo.png')} />
                    </View>

                    <View style={{ marginTop: 65, marginHorizontal: 90 }}>
                        <Image source={require('../../Images/Login/Name/Name.png')} />
                    </View>

                    <View style={styles.viewInput}>
                        <View style={styles.viewEmail}>
                            <Icon name="envelope-o" size={16} color="#007BFF" />
                            <TextInput style={styles.input} placeholder="OTP" placeholderTextColor="#818181" value={OTP} onChangeText={(val) => setOTP(val)}/>
                        </View>

                        <View style={styles.viewpasword} >
                            <Icon name="lock" size={16} color="#007BFF" />
                            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#818181" value={Password} onChangeText={(val) => setPassword(val)}/>
                        </View>
                    </View>                 
                    <TouchableOpacity style={styles.viewbtn}
                        onPress={() => Reset()}>
                        <Text style={styles.logintext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>

    )
};





export default Resetscreen;
