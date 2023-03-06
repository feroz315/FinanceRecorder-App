import React, { useState } from 'react';
import { TextInput, View, Text, ActivityIndicator, Image, ImageBackground, Dimensions, TouchableOpacity, Alert, Linking } from 'react-native';
import { Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { apiCall } from '../../Connection/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../const/Colors';
import {CountryPicker} from "react-native-country-codes-picker";
import {CountryList} from "react-native-country-codes-picker";



const { width, height } = Dimensions.get('window');

const Registerscreen = ({ navigation, }) => {

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Phonenum, setPhonenum] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);



  async function Submit() {
    setLoading(true)
    let Userdata = {
      username: userName,
      password: password,
      phoneNo: Phonenum  
    }
    try {

      let { data, status, responseCode } = await apiCall.register(Userdata)
      if (status == true && responseCode == 200) {
        await AsyncStorage.setItem('userdata', JSON.stringify(data));
        setLoading(false)
        navigation.navigate('BottomNav', {
          name: data.name,
          
        })
      }

    } catch (error) {
      console.log("error", error)
      setLoading(false)
    }

  }



  return (
    <View style={{ width: "110%", }}>
      <ImageBackground source={require("../../Images/Login/Shape/Shape.png")} />

      <TouchableOpacity style={{ marginTop: 35, marginLeft: 20 }} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color="#000" />
      </TouchableOpacity>

      <View style={{ height: 90}}>
      <Image source={require('../../Images/Login/Logo/Logo.png')} resizeMode="cover" style={{height:"210%",width:"75%",marginTop:55,alignSelf:'center',right:35}}/>
      </View>

    <View style={{ marginTop: 65, height:width * 0.17,alignSelf:'center', width: width * 0.64,right:width * 0.05}}>
      <Image source={require('../../Images/Login/Name/Name2.png')} style={{width:"100%",height:"100%"}} />
    </View>


      <View style={styles.viewInput}>
        <View style={styles.viewconfusername} >
          <Icon name="user" size={16} color="#007BFF" />
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#818181" value={userName} onChangeText={(val) => setUserName(val)} />
        </View>

        <View style={styles.viewpasword} >
          <Icon name="lock" size={16} color="#007BFF" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={hidePass ? true : false} placeholderTextColor="#818181" value={password} onChangeText={(val) => setPassword(val)} />
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            <Icon name={hidePass ? 'eye-slash' : 'eye'} size={16} color="#007BFF" style={{ marginRight: 10 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewphone}>
          <Icon name="phone" size={16} color="#007BFF" />
          <TextInput style={styles.input} placeholder="Phone No" keyboardType="numeric" placeholderTextColor="#818181" value={Phonenum} onChangeText={(val) => setPhonenum(val)} />
        </View>
      </View>

      <View style={{ justifyContent: 'center', marginRight: 40, marginTop: 5 }}>
        {
          loading ?
            <ActivityIndicator size={'small'} color='black' style={{marginTop:5}}/>
            :<View style={{height:5 }}/>
        }
              <TouchableOpacity style={styles.viewbtn}
              onPress={() => Submit()}>
              <Text style={styles.btntext}>Register</Text>
            </TouchableOpacity>
        
      </View>

      <View style={styles.viewline}>
        <View style={styles.line1} />
        <Text style={{ fontSize: 15, padding: 3, color: COLORS.gray }}>  or countinue with  </Text>
        <View style={styles.line2} />
      </View>

      <View style={styles.viewIcons}>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Avatar.Image size={40} source={require('../../Images/gmail.jpg')} style={styles.gmail} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com")}>
          <Avatar.Image size={40} source={require('../../Images/images.png')} style={styles.facebook} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.apple.com")}>
          <Avatar.Image size={40} source={require('../../Images/apple.png')} style={styles.apple} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewtext}>
        <Text style={styles.aconttext}>Already have an account? </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logintext}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
};





export default Registerscreen;





/*

<View style={styles.container}>
    <TouchableOpacity
      onPress={() => setShow(true)}
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}>
      
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {countryCode}
        </Text>
      </TouchableOpacity>

      // For showing picker just put show state to show prop
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>












    <View style={styles.container}>
      <View        
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {countryCode}
        </Text>
      </TouchableOpacity>

      // All props the same as for picker
       <CountryList
          lang={'pl'}
          pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
          }}
       />
    </View>


    */