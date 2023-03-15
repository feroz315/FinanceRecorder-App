import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '../../const/Colors';



import Splashscreen from '../Splash/Splashscreen';
import SnapScreen from '../CardsBoarding/SnapScreen';
import WelcomeScreen from '../Welcome/Welcome';
import Registerscreen from '../UserForm/Register';
import Loginscreen from '../UserForm/Login';
import AddExpense from '../Add Expense/AddExpense';
import MyExpenseDetails from '../MyExpense/MyExpenseDetails';
import Home from '../Home/Home';
import BottomNavigator from '../BottomNavigator/Bottom';
import Forgotscreen from '../UserForm/Forgotscreen';
import Resetscreen from '../UserForm/ResetOTP';



const Stack = createStackNavigator();
const Homestack = createStackNavigator();



export const HomeStack = () => {
  return (
    <Homestack.Navigator screenOptions={{ headerShown: false }}>
      <Homestack.Screen name="Homescreen" component={Home} />
      <Homestack.Screen name="AddExpense" component={AddExpense} />
      <Homestack.Screen name="ExpenseDetails" component={MyExpenseDetails} />
    </Homestack.Navigator>

  )
}


const StackNavigation = () => {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} hidden={true} />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splashscreen} />
        <Stack.Screen name="Snap" component={SnapScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BottomNav" component={BottomNavigator} />
        <Stack.Screen name="Register" component={Registerscreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Forgot" component={Forgotscreen} />
        <Stack.Screen name="Reset" component={Resetscreen} />
        

      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default StackNavigation;





