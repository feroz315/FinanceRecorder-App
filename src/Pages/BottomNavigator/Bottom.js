
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import COLORS from '../../const/Colors';



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
       height:55,
       borderTopWidth:0,
       elevation:0,
       activeTintColor: COLORS.cyanblue,
  
       
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
  
            tabBarIcon: ({ color }) => (
            <Image source={require('../../Images/home.png')} style={{width:25,height:25}}/>
            
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
         tabBarIcon: ({ color }) => (
          <Image source={require('../../Images/poor.png')} style={{width:26,height:26}}/>
          
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
            tabBarIcon: ({ color }) => (
          <Image source={require('../../Images/report.png')} style={{width:25,height:25}}/>
          ), headerShown: false
        }}/>
        
 
    <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom:2
           }, 
              tabBarIcon: ({ color }) => (
            <Image source={require('../../Images/settings.png')} style={{width:25,height:25}}/>
            
          ), headerShown: false
        }}/>
         
    </Tab.Navigator>

    );
};


export default BottomNavigator;

