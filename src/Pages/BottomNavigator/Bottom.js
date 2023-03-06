
import React from 'react';
import { Image,Dimensions } from 'react-native';
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
       backgroundColor:"#F2F2F2",
       height:width * 0.14,
       borderTopWidth:0,
       elevation:0,
      },
      null
     ]
    }}>
        
      <Tab.Screen
        name="Home"
        children={() => <HomeStack  data={route?.params?.name}/>}
        options={{
            tabBarLabelStyle: {
                fontSize: 13,
                fontWeight: "bold",
                marginBottom:2
               },   
  
            tabBarIcon: ({ focused }) => (
            <Image source={require('../../Images/home.png')} style={{width:28,height:25,tintColor: focused ? "#007BFF" : "#908e8c" }}/>
             ), headerShown: false
        }}/>
         
      <Tab.Screen
      name="MyExpense"
      component={MyExpense}
      options={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom:2
         }, 
         tabBarIcon: ({ focused }) => (
          <Image source={require('../../Images/poor.png')} style={{width:30,height:27,tintColor: focused ? "#007BFF" : "#908e8c" }}/>
          
        ), headerShown: false
      }}/>
    
    <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom:2
           }, 
            tabBarIcon: ({ focused }) => (
          <Image source={require('../../Images/report.png')} style={{width:26,height:25,tintColor: focused ? "#007BFF" : "#908e8c"}}/>
          ), headerShown: false
        }}/>
        
 
    <Tab.Screen
        name="Settings"
        children={() => <Settings  data={route?.params}/>}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom:2
           }, 
              tabBarIcon: ({ focused }) => (
            <Image source={require('../../Images/settings.png')} style={{width:26,height:25,tintColor: focused ? "#007BFF" : "#908e8c"}}/>
            
          ), headerShown: false
        }}/>
         
    </Tab.Navigator>

    );
};


export default BottomNavigator;

