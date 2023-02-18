import React from 'react';
import { View,Text, SafeAreaView, Image,Alert,TouchableOpacity } from 'react-native';
import styles from './style';




const Settings = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ marginTop: 30, alignSelf:'center' }}>
                <Image source={require("../../Images/Settings/Settings.png")} style={{ width: 100, height: 25 }} />
            </View>

            <View style={styles.viewheader}>
                <View style={styles.header}>
                    <Text style={styles.headertext1}>Mir Maaz</Text>
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
                            <Text style={styles.name1}>Mir Maaz</Text>
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


              <View style={styles.viewcard2}>
                     <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
                     <View style={styles.viewtext2}>
                         <Text style={styles.Email}>Email</Text>        
                          <Text style={styles.name2}>mir.maaz@gmail.com</Text>
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


           <View style={styles.viewcard3}>
                  <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
                  <View style={styles.viewtext3}>
                      <Text style={styles.number}>Number</Text>
                      <Text style={styles.name3}>+92 123 1413577</Text>
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


    <View style={styles.viewcard5}>
            <Image source={require("../../Images/Settings/globe.png")} style={{ width: 20, height: 20 }} />
            <View style={styles.viewtext5}>
                <Text style={styles.curreny}>Currency</Text>
                <Text style={styles.name4}>Dollar</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert("test")}>
             <View style={{ marginHorizontal: 220 }}>
                <Image source={require('../../Images/Settings/next.png')} />
            </View>
            </TouchableOpacity>
         </View>
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


         <TouchableOpacity onPress={() => navigation.navigate("Login")} 
            style={{alignSelf:'center',marginTop:15}}>
            <Image source={require("../../Images/Settings/Signout.png")} />
              </TouchableOpacity>   
                   
              </View>

        </SafeAreaView>
    )
};


export default Settings;
