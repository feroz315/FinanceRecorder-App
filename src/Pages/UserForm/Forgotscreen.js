import React, { useState } from 'react';
import { TextInput,View, Text, SafeAreaView, Image, ImageBackground, Dimensions, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './loginstyle';
import { apiCall } from '../../Connection/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width, height } = Dimensions.get('window');


const Forgotscreen = ({ navigation }) => {
    const [Email, setEmail] = useState("");


    async function ResetID()  {
        let data = {
            email: Email,
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

        <SafeAreaView>
            <View style={{ width: "100%" }}>
                <ImageBackground source={require("../../Images/Login/Shape/Shape.png")} style={{ height: '100%' }} />
                <View style={{ position: "absolute" }}>

                    <TouchableOpacity style={{ marginTop: 35, marginLeft: 25 }} onPress={() => navigation.navigate('Login')}>
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
                            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#818181" value={Email} onChangeText={(val) => setEmail(val)}/>
                        </View>
                    </View>
                
                    <TouchableOpacity style={styles.viewbtn}
                        onPress={() => ResetID()}>
                        <Text style={styles.logintext}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>

    )
};





export default Forgotscreen;
