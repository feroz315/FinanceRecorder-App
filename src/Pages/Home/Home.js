import React, { useState,useEffect } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, FlatList,Alert,ActivityIndicator } from 'react-native';
import COLORS from '../../const/Colors';
import { LineChart } from "react-native-chart-kit";
import styles from './style';
import { apiCall } from '../../Connection/apiCall';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';


import { useSelector } from 'react-redux';


const { height,width} = Dimensions.get('window');
const screenWidth = Dimensions.get("window").width;


const Home = () => {
const isFocused = useIsFocused();
const UserName = useSelector(state => state.userReducer.userData.name)


const navigation = useNavigation();
const [ Monthexpense, setMonthexpense ] = useState(0); 
const [ Data, setData ] = useState([])
const [ loading, setLoading ] = useState(false);


const monthdata = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => COLORS.cyanblue, // optional
        strokeWidth: 2 // optional
      }
    ],
     // optional
  };
 
  const chartConfig = {
  
    color: (opacity = 0) => '#EFF9FC',
    strokeWidth: 3, // optional, default 3
    barPercentage: 0,
    useShadowColorFromDataset: false, // optional
    backgroundColor:'white',
    backgroundGradientFrom:'rgba(239,249,251,0)',
    backgroundGradientTo:'rgba(239,249,251,0)',         
  };


  async function HomeExpense(){
    try {
      const res = await apiCall.monthExpense();
        setMonthexpense(res.data[0].totalAmount);    
        } 
    catch (error) {
      console.log("🚀 ~ file: Home.js:55 ~ HomeExpense ~ error", error)
      setMonthexpense(0);     
      
      
    }
  }

async function ItemExpense() {
  setLoading(true)
  try{
    const result = await apiCall.allExpense();
    setData(result.data.allExpense)
    setLoading(false)
        
  }
  catch(error) {
  console.log("🚀 ~ file: Home.js:64 ~ ItemExpense ~ error", error)
  setLoading(false)
  }
}



useEffect(() => {
  ItemExpense();
  HomeExpense();
 }, [isFocused]);
 
  
  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightwhite,flex:1}}>
    <View style={{backgroundColor:"#F2FEFA",height:width * 0.62}}>
           <View style={styles.header}>
            <Image source={require('../../Images/Oval.png')} style={styles.headerimage} />
            <View style={styles.headertextview}>
              <Text style={styles.headertext}>Welcome</Text>
              <Text style={styles.headertext1}>{UserName}</Text>
              </View>
          </View>
        
        <View style={styles.ViewCard}>
          {Monthexpense == 0 ? <View style={{height: width * 0.32}}/> : <LineChart data={monthdata} width={width*0.9} height={135} chartConfig={chartConfig}/>}
            <View style={styles.viewcardcenter}>
            <View style={styles.cardviewtext}>
            <View style={styles.viewtext}>
            <Text style={styles.cardtext}>This Month</Text>
            <Text style={styles.text}>${Monthexpense}</Text>
            </View>
            </View>
            </View>
            </View>
   
        </View>
    
          <View style={[styles.viewcenter,{width:width*0.9,alignSelf:'center',paddingHorizontal:width*0.01,marginTop:55}]}>
            <Text style={[styles.textrank]}>Top 5 Heads</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("MyExpense")}>
              <Text style={styles.viewItem}>View All</Text>
            </TouchableOpacity>
          </View>
          {
            loading?
            <ActivityIndicator size={'large'} color={"#000"} style={{marginTop:20,flex:0.40}}/>:
            !Data.length > 0 ? <Text style={styles.viemsg}>There are no Items Available</Text>:
             Data.length > 5 ? null :
              
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => {
            return (    
              <View style={{
                width:width*0.9,
                alignSelf:'center',              
              }}>
              <TouchableOpacity 
              onPress={() => navigation.navigate("ExpenseDetails",
              {
                id:item._id
              }         
              )}>
              <View style={styles.cards}>
              <View style={styles.viewcarditems}>
              <Image source={{ uri: item.category.img}} style={{height:17,width:20,}} resizeMode="contain"/>
              <Text style={styles.itemtext}>{item.category.name}</Text>
              </View>
              <Text style={styles.itemprice}>${item.ammount}</Text>
              </View>
              </TouchableOpacity>                          
              </View>
              )}}/>
                      
               }
           
            <TouchableOpacity style={styles.viewbtn}    
              onPress={() => navigation.replace("AddExpense")}>
              <Text style={styles.textbtn}>Add Expense</Text>
              </TouchableOpacity>     
              </SafeAreaView>


  );
}




export default Home;

