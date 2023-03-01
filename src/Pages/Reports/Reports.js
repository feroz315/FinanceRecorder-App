import React, { useState,useEffect } from 'react';
import { View, Text, SafeAreaView, Image,TouchableOpacity,FlatList,Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import COLORS from '../../const/Colors';
import styles from './style';
import * as Progress from 'react-native-progress';
import {ProgressBar} from 'react-native-multicolor-progress-bar';
import { apiCall } from '../../Connection/apiCall';
import { useIsFocused } from '@react-navigation/native';


const { height,width} = Dimensions.get('window');


const Reports = ({ navigation}) => {
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
           setTotalItems(result.data.allExpense)
        } 
        catch (error) {
          console.log("Testexpense", result)
        }
      }
      
      
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
                <View style={{ marginTop: 5, marginLeft: 5 }}>
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
                    <Progress.Bar progress={0.4} width={290} height={16} borderRadius={10} style={{ marginTop: 12, marginLeft: 12 }} />
                </View>
              <View style={styles.Viewitems}>
              <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={TotalItems}
                numColumns={2}
                renderItem={({ item }) => (
               <View style={{margin:4,marginLeft:10}}>
                  <View style={styles.leftitems}>
                      <View style={styles.viewImg}>
                          <Image source={require("../../Uilites/Icons/utilities.png")} style={{ height: 26, width: 24, marginTop: 10, marginLeft: 10 }} />
                      </View>
                      <View style={styles.viewitem}>
                          <Text style={styles.text}>{item.categoryName}</Text>
                          <Text style={styles.price}>${item.totalAmount}</Text>
                      </View>
                  </View>
                    <View style={styles.line1} />
                  </View>
                )}/>
               </View>

           </View>    
           
        </SafeAreaView>

    );
}




export default Reports;




