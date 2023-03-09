import React, { useState,useEffect } from 'react';
import { TextInput,View, Text, SafeAreaView, Image, ImageBackground, Dimensions, TouchableOpacity, Alert, Linking } from 'react-native';
import { ActivityIndicator, Avatar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './loginstyle';
import { apiCall } from '../../Connection/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../../const/Colors';
import { useForm, Controller } from "react-hook-form";




const { width, height } = Dimensions.get('window');


const Loginscreen = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [ agree, setAgree ] = useState(false);
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading ] = useState(false);  
    const [hidePass, setHidePass] = useState(true);




async function Login()  {
setLoading(true)
let obj = {
    username: userName,
    password: Password,
    
}
console.log("first",obj)
    try{
            let { data,status,responseCode} = await apiCall.signin(obj)
            if(status === true && responseCode === 200){
                await AsyncStorage.setItem('userdata',JSON.stringify(data))
               setLoading(false)
                    navigation.navigate("BottomNav", {
                    name:data.name
                  })
                }             
         }
        catch(error) {
            console.log("test", error)
            setLoading(false)
        }
     
    }




 return (
         <ImageBackground source={require("../../Images/Login/Shape/Shape.png")} style={{ height: '100%',width:"115%" }}>
            <TouchableOpacity style={{ marginTop: 30, marginLeft: 15 }} onPress={() => navigation.navigate('Register')}>
                        <AntDesign name="arrowleft" size={30} color="#000" />
                    </TouchableOpacity>

                    <View style={{ height: 90}}>
                        <Image source={require('../../Images/Login/Logo/Logo.png')} resizeMode="cover" style={{height:"210%",width:"75%",marginTop:55,alignSelf:'center',right:35}}/>
                    </View>

                    <View style={{ marginTop: 65, height:width * 0.17,alignSelf:'center', width: width * 0.64,right:width * 0.05}}>
                        <Image source={require('../../Images/Login/Name/Name2.png')} style={{width:"100%",height:"100%"}} />
                    </View>

                    <View style={styles.viewInput}>
                        <View style={styles.viewUser}>
                        <Icon name="user" size={16} color="#007BFF" style={{marginRight:5}} />
                         <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#818181" value={userName} onChangeText={(val) => setUserName(val)} />
                        </View>
                         <Text>{userError}</Text>
                        
                        <View style={styles.viewpasword}>
                            <Icon name="lock" size={16} color="#007BFF" />
                            <TextInput style={styles.input} placeholder="Password" secureTextEntry={hidePass ? true : false} placeholderTextColor="#818181" value={Password} onChangeText={(val) => setPassword(val)}/>
                        
                           <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            <Icon name={hidePass ? 'eye-slash' : 'eye'} size={16} color="#007BFF" style={{marginRight:10}}/>
                             </TouchableOpacity>
                           </View>
                           <Text>{passwordError}</Text>
                    </View>

                 <View style={styles.viewRF}>
                    <View style={styles.viewtext}>
                      <CheckBox disabled={false} value={agree} style={{marginBottom:5,color:COLORS.gray}} 
                         onValueChange={() => setAgree(!agree)} />   
                            <Text style={styles.textRM}>Remember Me</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                            <Text style={styles.textFP}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

              <View style={{flex:0.90,justifyContent:'center',alignSelf:'center'}}>
              {
                loading ? 
                <ActivityIndicator size={"small"} color='black' style={{marginRight:50}}/>
                :<View style={{height: 5}}/>
              }
                <TouchableOpacity style={styles.viewbtn}
                onPress={() => Login()}>
                <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>          
             </View>
                    <View style={styles.viewline}>
                        <View style={styles.line1} />
                        <Text style={{ fontSize: 15, padding: 3,color:COLORS.gray }}>  or countinue with   </Text>
                        <View style={styles.line2} />
                    </View>

                 <View style={styles.viewIcons}>
                      <TouchableOpacity onPress={()=> Linking.openURL('http://google.com')}>
                        <Avatar.Image size={40} source={require('../../Images/gmail.jpg')} style={styles.gmail} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com")}>
                        <Avatar.Image size={40} source={require('../../Images/images.png')} style={styles.facebook} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> Linking.openURL("https://www.apple.com")}>
                         <Avatar.Image size={40} source={require('../../Images/apple.png')} style={styles.apple} />
                        </TouchableOpacity>            
                         </View>

                    <View style={styles.viewfooter}>
                        <Text style={styles.aconttext}>Don't have an account? </Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signtext}> Sign Up</Text>
                        </TouchableOpacity>
                         </View>
                           </ImageBackground>
        
    )
};



export default Loginscreen;



  /*        
            const emailValid = false;
            if(username.length == 0){
                setusernameError("username is required")
            }else if(Email.indexOf('') >= 0 ){
                setEmailError("Email doesn't contain space")
            }else{
                setEmailError("")
                emailValid = true
            } 
            let passwordValid = false;
            if(Password.length == 0 ){
                setPasswordError("Password is required")
            }else if(Password.length < 0 ){
                setPasswordError("Password should be minimum 6 characters");

            }else if(Password.indexOf('') >= 0){
                setPasswordError('Password cannot contain spaces');                          

            }else{
                setPasswordError("")
                passwordValid = true;
            }
                navigation.navigate('BottomNav')
                setEmail("")
                setPassword("")
            const emailValid = false;
            if(Email.length == 0){
                setEmailError("Email is required")
            }else if(Email.indexOf('') >= 0 ){
                setEmailError("Email doesn't contain space")
            }else{
                setEmailError("")
                emailValid = true
            } 
            let passwordValid = false;
            if(Password.length == 0 ){
                setPasswordError("Password is required")
            }else if(Password.length < 0 ){
                setPasswordError("Password should be minimum 6 characters");
            }else if(Password.indexOf('') >= 0){
                setPasswordError('Password cannot contain spaces');                          
            }else{
                setPasswordError("")
                passwordValid = true;
            }
                navigation.navigate('BottomNav')
                setEmail("")
                setPassword("")



              if(userName === ""){
                    setUserError("Please Fill the username")
                }if(Password.length < 6 && Password === "" ){
                    setPasswordError('Password must be at least 6 chars long')   
                }else {
              


*/

