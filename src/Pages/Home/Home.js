import React, { useState,useEffect } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, FlatList,Alert,ActivityIndicator } from 'react-native';
import COLORS from '../../const/Colors';
import { LineChart } from "react-native-chart-kit";
import styles from './style';
import { apiCall } from '../../Connection/apiCall';
import { useNavigation } from '@react-navigation/native';



const { height,width} = Dimensions.get('window');
const screenWidth = Dimensions.get("window").width;


const Home = ({ data }) => {
const navigation = useNavigation();
const [ Monthexpense, setMonthexpense ] = useState(""); 
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
        console.log("🚀 ~ file: Home.js:50 ~ HomeExpense ~ res", res)
        setMonthexpense(res.data[0].totalAmount);     

    } 
    catch (error) {
      console.log("🚀 ~ file: Home.js:55 ~ HomeExpense ~ error", error)
      
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
 }, []);
 

useEffect(() => {
 HomeExpense();
}, []);

  
  return (
    <SafeAreaView style={{backgroundColor:COLORS.lightwhite}}>
          <View style={styles.header}>
            <Image source={require('../../Images/Men2.png')} style={styles.headerimage} />
            <View style={styles.headertextview}>
              <Text style={styles.headertext1}>Home</Text>
              <Text style={styles.headertext1}>{data}</Text>
              </View>
          </View>

        <View style={styles.ViewCard}>
           <LineChart data={monthdata} width={width*0.9} height={135} chartConfig={chartConfig}/>
           <View style={styles.viewcardcenter}>
             <View style={styles.cardviewtext}>
             <View style={styles.viewtext}>
               <Text style={styles.cardtext}>This Month</Text>
               <Text style={styles.text}>${Monthexpense}</Text>
             </View>
           </View>
             </View>
          </View>

          <View style={[styles.viewcenter,{width:width*0.9,alignSelf:'center',paddingHorizontal:width*0.02}]}>
            <Text style={[styles.textrank]}>Top 5 Heads</Text>
            <TouchableOpacity 
            onPress={() => Alert.alert('work')}>
              <Text style={styles.viewItem}>View All</Text>
            </TouchableOpacity>
          </View>
               
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => {
            return (    
              <View style={{
                width:width*0.9,
                alignSelf:'center'
              }}>
              <TouchableOpacity 
              onPress={() => navigation.navigate("ExpenseDetails",
              {
                id:item._id
              }         
              )}>
              <View style={styles.cards}>
              <View style={styles.viewcarditems}>
              <Image source={require('../../Images/Home/Utilities/Utilities.png')} style={{ color: "007BFF" }} />
              <Text style={styles.itemtext}>{item.category.name}</Text>
              </View>
              <Text style={styles.itemprice}>${item.ammount}</Text>
              </View>
              </TouchableOpacity>                          
              </View>
              )}}/>

             <TouchableOpacity style={styles.viewbtn}    
              onPress={() => navigation.navigate("AddExpense")}>
              <Text style={styles.textbtn}>Add Expense</Text>
              </TouchableOpacity>       
       </SafeAreaView>


  );
}

export default Home;

