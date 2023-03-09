import React, { useState } from 'react';
import { TextInput,View, Text, SafeAreaView, Image, ImageBackground, Dimensions, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './forgotstyle';
import { apiCall } from '../../Connection/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width, height } = Dimensions.get('window');


const Forgotscreen = ({ navigation }) => {
    const [phonenumber, setPhonenumber] = useState("");


    async function ResetID()  {
        let data = {
            number: phonenumber,
        }
        try{
            let result = await apiCall.passwordchange(data)
            console.log("login", result);
              navigation.navigate('Reset')

          }
        catch(error) {
            console.log("test", error)
   
        }
     
    }

    return (

          <ImageBackground source={require("../../Images/Login/Shape/Shape.png")} style={{ height: '100%',width:"100%" }}>
                <TouchableOpacity style={{ marginTop: 35, marginLeft: 25 }} onPress={() => navigation.navigate('Login')}>
                     <AntDesign name="arrowleft" size={30} color="#000" />
                    </TouchableOpacity>

                    <View style={{ height: 100, marginHorizontal: 20 }}>
                        <Image source={require('../../Images/Login/Logo/Logo.png')} />
                    </View>

                    <View style={{ marginTop: 65, marginHorizontal: 85 }}>
                        <Image source={require('../../Images/Login/Name/Name.png')} />
                    </View>

                    <View style={styles.viewInput}>
                        <View style={styles.viewNum}>
                            <Icon name="phone" size={16} color="#007BFF" />
                            <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#818181" value={phonenumber} onChangeText={(val) => setPhonenumber(val)}/>
                        </View>
                    </View>
                
                    <TouchableOpacity style={styles.viewbtn}
                        onPress={() => ResetID()}>
                        <Text style={styles.logintext}>Send</Text>
                    </TouchableOpacity>
                    </ImageBackground>
      

    )
};





export default Forgotscreen;
