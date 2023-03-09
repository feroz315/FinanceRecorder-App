
import React from 'react';
import { Image,Dimensions,View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import COLORS from '../../const/Colors';
const { height, width } = Dimensions.get('window');



import Home from '../Home/Home';
import Settings from '../Settings/Settings';
import MyExpense from '../MyExpense/MyExpense';
import Reports from '../Reports/Reports';
import { HomeStack } from '../StackNavigator/StackNavigator';



const Tab = createBottomTabNavigator();


const BottomNavigator = ({route}) => {
  return (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel:true,
      tabBarStyle:[
      {
       backgroundColor: COLORS.white,
       height:width * 0.14,
       borderTopWidth:0,
       elevation:25,
       borderTopStartRadius:25,
       borderTopRightRadius:25
             
      },
      null
     ]
    }}>
        
      <Tab.Screen
        name="Home"
        children={() => <HomeStack  data={route?.params?.name}/>}
        options={{
            tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: "bold",
                marginBottom:1,
                
                
            },
                
            tabBarIcon: ({ focused }) => (
          <View> 
           <Image source={require('../../Images/home1.png')} style={{width:19,height:20,tintColor: focused ? "#007BFF" : "#908e8c" }}/>
            </View>  
             ), headerShown: false
        }}/>
         
      <Tab.Screen
      name="MyExpense"
      component={MyExpense}
      options={{
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
          marginBottom:1

         }, 
         tabBarIcon: ({ focused }) => (
          <Image source={require('../../Images/Handmoney.png')} style={{width:25,height:24,tintColor: focused ? "#007BFF" : "#908e8c" }}/>
          
        ), headerShown: false
      }}/>
    
    <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "bold",
            marginBottom:1,
           }, 
            tabBarIcon: ({ focused }) => (
          <Image source={require('../../Images/reports1.png')} style={{width:24,height:22,tintColor: focused ? "#007BFF" : "#908e8c"}}/>
          ), headerShown: false
        }}/>
        
 
    <Tab.Screen
        name="Settings"
        children={() => <Settings  data={route?.params}/>}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "bold",
            marginBottom:1
           }, 
              tabBarIcon: ({ focused }) => (
            <Image source={require('../../Images/setting2.png')} style={{width:22,height:22,tintColor: focused ? "#007BFF" : "#908e8c"}}/>
            
          ), headerShown: false
        }}/>
         
    </Tab.Navigator>

    );
};


export default BottomNavigator;

