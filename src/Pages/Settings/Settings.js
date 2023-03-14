import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React , {useState }from 'react';
import { View,Text, SafeAreaView, Image,Alert,TouchableOpacity,FlatList,Modal } from 'react-native';
import COLORS from '../../const/Colors';
import styles from './style';
// import { formatCurrency,getSupportedCurrencies } from "react-native-format-currency";



const Settings = ({ data}) => {
const navigation =useNavigation()
const [modalVisible, setModalVisible] = useState(false);


const Signout = async () => {
  try {
    let Logout = await AsyncStorage.removeItem("userdata")
    console.log("🚀 ~ file: Settings.js:15 ~ Signout ~ Logout:", Logout)
    navigation.replace("Login")
    console.log(navigation)
  } catch (error) {
    console.log("Error", error)
   }
}


  return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.white }}>
            <View style={{ marginTop: 20, alignSelf:'center' }}>
                <Image source={require("../../Images/Settings/Settings.png")} style={{ width: 110, height: 30 }} />
            </View>

            <View style={styles.viewheader}>
                <View style={styles.header}>
                    <Text style={styles.headertext1}>Mr.{data}</Text>
                    <Text style={styles.headertext2}>Admin</Text>
                </View>
                <View style={styles.viewuser}>
                    <Image source={require('../../Images/Settings/user.png')} style={{ marginLeft: 3, marginTop: 5, }} />
                </View>
            </View>

           <View style={styles.allcards}>
                <View style={styles.viewcard1}>
                      <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
                        <View style={styles.viewtext}>
                            <Text style={styles.User}>Username</Text>
                            <Text style={styles.name1}>{data}</Text>
                        </View>
                        <TouchableOpacity onPress={() => Alert.alert("test")}>
                         <View style={{ marginHorizontal: 200 }}>
                            <Image source={require('../../Images/Settings/next.png')} />
                        </View>
                        </TouchableOpacity>
                     </View>
                   <View style={{marginTop:14,marginLeft:28}}>
                     <Image source={require("../../Images/Settings/Line.png")}/>
                     </View>


           <View style={styles.viewcard3}>
                  <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
                  <View style={styles.viewtext3}>
                      <Text style={styles.number}>Number</Text>
                      <Text style={styles.name3}>+92 3150137635</Text>
                  </View>
                  <TouchableOpacity onPress={() => Alert.alert("test")}>
                   <View style={{ marginHorizontal: 145 }}>
                      <Image source={require('../../Images/Settings/next.png')} />
                  </View>
                  </TouchableOpacity>
               </View>
             <View style={{marginTop:13,marginLeft:28}}>
               <Image source={require("../../Images/Settings/Line.png")}/>
               </View>


            <View style={styles.viewcard4}>
               <Image source={require("../../Images/Settings/message.png")} style={{ width: 20, height: 20 }} />
               <View style={styles.viewtext4}>
                   <Text style={styles.pasword}>Password</Text>
                   
               </View>
               <TouchableOpacity onPress={() => Alert.alert("test")}>
                <View style={{ marginHorizontal: 204 }}>
                   <Image source={require('../../Images/Settings/next.png')} />
               </View>
               </TouchableOpacity>
            </View>

          <View style={{marginTop:10,marginLeft:28}}>
            <Image source={require("../../Images/Settings/Line.png")}/>
            </View>


      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.viewcard5}>
         <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
            <View style={styles.viewtext5}>
                <Text style={styles.curreny}>Currency</Text>
                <Text style={styles.name4}>Dollar</Text>
              </View>
             <View style={{ marginHorizontal: 220 }}>
                <Image source={require('../../Images/Settings/next.png')} />
             </View>
            </TouchableOpacity>
     
         <View style={{marginTop:10,marginLeft:28}}>
         <Image source={require("../../Images/Settings/Line.png")}/>
         </View>

         
    <View style={styles.viewcard6}>
         <Image source={require("../../Images/Settings/message.png")} style={{ width: 20, height: 20 }} />
         <View style={styles.viewtext6}>
            <Text style={styles.contact}>Contact</Text>
         </View>
         <TouchableOpacity onPress={() => Alert.alert("test")}>
          <View style={{ marginHorizontal: 215 }}>
             <Image source={require('../../Images/Settings/next.png')} />
         </View>
         </TouchableOpacity>
      </View>
    <View style={{marginTop:15,marginLeft:28}}>
      <Image source={require("../../Images/Settings/Line.png")}/>
      </View>


    <View style={styles.viewcard7}>
      <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
      <View style={styles.viewtext7}>
          <Text style={styles.name7}>Terms and Privacy Policy</Text>
      </View>
      <TouchableOpacity onPress={() => Alert.alert("test")}>
       <View style={{ marginHorizontal: 100 }}>
          <Image source={require('../../Images/Settings/next.png')} />
      </View>
      </TouchableOpacity>
   </View>
 <View style={{marginTop:10,marginLeft:28}}>
   <Image source={require("../../Images/Settings/Line.png")}/>
   </View>

       <TouchableOpacity onPress={() => Signout()} 
            style={{alignSelf:'center',marginTop:40}}>
            <Image source={require("../../Images/Settings/Signout.png")} style={{alignSelf:'center',marginRight:40}}/>
              </TouchableOpacity>                    
              </View>
        </SafeAreaView>
    )
};


export default Settings;




























/*


              <View style={styles.viewcard2}>
                     <Image source={require("../../Images/Settings/globe.png")} style={{ width:20, height:20,}} />
                     <View style={styles.viewtext2}>
                         <Text style={styles.Email}>Email</Text>        
                          <Text style={styles.name2}>feroz@gmail.com</Text>
                         </View>
                     <TouchableOpacity onPress={() => Alert.alert("test")}>
                       <View style={{ marginHorizontal: 95 }}>
                         <Image source={require('../../Images/Settings/next.png')} />
                     </View>
                     </TouchableOpacity>
                  </View>
                <View style={{marginTop:13,marginLeft:28}}>
                  <Image source={require("../../Images/Settings/Line.png")}/>
                  </View>

*/