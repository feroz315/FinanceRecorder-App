import React, { useState,useEffect } from 'react';
import { View, Text, SafeAreaView, Image,TouchableOpacity,FlatList,Dimensions, Alert } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import COLORS from '../../const/Colors';
import styles from './style';
import * as Progress from 'react-native-progress';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import { apiCall } from '../../Connection/apiCall';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const { height,width} = Dimensions.get('window');


const Reports = () => {

  
const navigation = useNavigation();  
const isFocused = useIsFocused();


const [ Totalexpense, setTotalexpense ] = useState(0);   
const [ TotalItems, setTotalItems ] = useState();   

    
    const AllExpense = async () => {  
        try {
          const result = await apiCall.totalExpense();
            setTotalexpense(result.data[0].totalExpenses)
        } 
        catch (error) {
          console.log("Testexpense", result)
          setTotalexpense();
        }
      }

      
    async function AllGroupExpense(){
        try {
          const result = await apiCall.expenseGroup();
           console.log("🚀 ~ file: Reports.js:40 ~ AllGroupExpense ~ result:", result.data.allExpense)
           setTotalItems(result.data.allExpense)
        } 
        catch (error) {
          console.log("Testexpense", result)
        }
      }
      


// const getvalue = () => {
  
//   const initialValue = 0;
//   const sumWithInitial = TotalItems.reduce(
//   (accumulator, currentValue) => console.log("S",accumulator.totalAmount + currentValue.totalAmount)
// );

// return sumWithInitial


// }
// const res = getvalue()
// console.log("first",res)


      
useEffect(() => {
  AllGroupExpense();
  }, [isFocused]);
  

useEffect(() => {
    AllExpense();
  },[isFocused])
    
 
    return (
        <SafeAreaView style={{backgroundColor:COLORS.lightwhite,flex:1}}>
         <View style={styles.header}>
           <View style={{marginLeft:120,marginTop:10}}>
           <Image source={require('../../Images/Reports/Reports.png')} style={{width:90,height:25}}/>
             </View>   
             <View style={styles.ProgressCard}>
                <View style={{ marginTop:8, alignSelf:"center" }}>
                 <AnimatedCircularProgress
                            size={300}
                            width={20}
                            fill={Totalexpense / 100 }
                            arcSweepAngle={180}
                            rotation={-90}
                            lineCap='round'
                            tintColor={COLORS.cyanblue}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#F8F8F8" /> 
                    </View>

                    <View style={styles.viewpercentge}>
                        <Text style={styles.text0}>0%</Text>
                        <Text style={styles.text100}>100%</Text>
                    </View>

                    <View style={styles.viewspending}>
                        <Text style={styles.spending}>Total Spending</Text>
                        <Text style={styles.totalamount}>${Totalexpense}</Text>
                    </View>

                </View>
            </View>
            <Text style={styles.textheading}>Spending Breakdown</Text>
          
            <View style={styles.ViewCard}>
                <View style={styles.ViewProgress}>
                  <Progress.Bar progress={0.4 } width={width * 0.74} height={16} borderRadius={10} color={COLORS.cyanblue} style={{ marginTop: 8, marginLeft: 12 }} />
                </View>
                <View style={styles.Viewitems}>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={TotalItems}
                numColumns={2}
                renderItem={({ item }) => (
                <TouchableOpacity style={{margin:4,marginLeft:10}} onPress={() => Alert.alert("work")}>
              
                  <View style={styles.leftitems}>
                      <View style={styles.viewImg}>
                          <Image source={require("../../Uilites/Icons/utilities.png")} style={{ height: 25, width: 25, marginTop: 8, marginLeft: 8 }} />
                      </View>
                      <View style={styles.viewitem}>
                          <Text style={styles.text}>{item.categoryName}</Text>
                          <Text style={styles.price}>${item.totalAmount}</Text>
                      </View>
                  </View>
                <View style={styles.Progressline}>
                 <Progress.Bar progress={0.5 } width={width * 0.26} height={10} borderRadius={7} color={COLORS.cyanblue} style={{ marginTop: 8, marginLeft: 10 }} />
                  </View>
                  </TouchableOpacity>
                )}/>
               </View>
           </View>  

        </SafeAreaView>

    );
}




export default Reports;




