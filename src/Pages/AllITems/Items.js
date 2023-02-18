import React from 'react';
import { View, StyleSheet,Text,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import COLORS from '../../const/Colors';
import Feather from 'react-native-vector-icons/AntDesign';


const Items = ({route}) => {
    console.log("🚀 ~ file: Items.js:8 ~ Items ~ route", route)
    return (
<SafeAreaView>
        
     <View style={styles.ViewCard}>
      
     <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:35,marginLeft:5}}>
     <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
      <Image source={require('../../Uilites/Icons/food.png')} style={{marginTop:10,height:26,width:24}}/>
      </View> 
    <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
      <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
        </View>    
     <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
        <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
        </View>
     </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:7,marginRight:10,marginLeft:5,}}>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Food</Text>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Shopping</Text>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Pet</Text>
             
       </View> 
                
     <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20,marginLeft:5}}>
     <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
      <Image source={require('../../Uilites/Icons/food.png')} style={{marginTop:10,height:26,width:24}}/>
      </View> 
    <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
      <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
        </View>    
     <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
        <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
        </View>
     </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:7,marginRight:10,marginLeft:5,}}>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Clothing</Text>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Education</Text>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Home</Text>
       



      
       </View> 
              
     <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20,marginLeft:5}}>
     <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
      <Image source={require('../../Uilites/Icons/food.png')} style={{marginTop:10,height:26,width:24}}/>
      </View> 
    <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
      <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
        </View>    
     <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
        <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
        </View>
     </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:7,marginRight:10,marginLeft:5,}}>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Transfer</Text>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Investment</Text>
        <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Services</Text>
       



      
       </View> 
      
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20,marginLeft:5}}>
       <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
        <Image source={require('../../Uilites/Icons/food.png')} style={{marginTop:10,height:26,width:24}}/>
        </View> 
      <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
        <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
          </View>    
       <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
          <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
          </View>
       </View>
         <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:7,marginLeft:5}}>
          <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Gift</Text>
          <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Health</Text>
          <Text style={{fontSize:15,fontFamily:'OpenSans'}}>Health</Text>
         
  
  
  
        
         </View>     
 
         <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:20,marginLeft:5}}>
         <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
          <Image source={require('../../Uilites/Icons/food.png')} style={{marginTop:10,height:26,width:24}}/>
          </View> 
        <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
          <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
            </View>    
         <View style={{backgroundColor:"#F2FEFA",width:50,height:50,borderRadius:15,alignItems:'center'}}> 
            <Image source={require('../../Uilites/Icons/basket.png')} style={{marginTop:10,height:26,width:24}}/>
            </View>
         </View>
           <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:7,marginRight:10,marginLeft:10,}}>
            <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Busniess</Text>
            <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}>Money</Text>
            <Text style={{fontSize:16,fontFamily:'OpenSans-Medium'}}> Electronics</Text>
           
    
    
    
          
           </View> 
               
         </View>              
        


</SafeAreaView>

  );
}


const styles = StyleSheet.create({

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      marginTop: 40,
      marginLeft: 10,
  
  
    },
    headertext: {
      fontSize: 25,
      color: COLORS.dark,
      marginRight: 130,
      fontFamily: 'Montserrat-Regular'
  
    },
    ViewCard: {
      marginTop: 100,
      backgroundColor: "#FFF",
      elevation: 15,
      marginVertical: 2,
      height: "80%",
      width: "85%",
      borderRadius: 40,
      marginLeft: 30,
    },
    cardviewtext: {
      marginTop: 10,
      marginHorizontal: 10,
    },
    cardtext: {
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      color: COLORS.gray
    },
    text: {
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
      color: COLORS.gray
    },
  
  })

export default Items;
