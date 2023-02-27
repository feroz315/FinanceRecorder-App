import React, { useState,useEffect } from 'react';
import { View,Text, Image,SafeAreaView ,TouchableOpacity, ActivityIndicator } from 'react-native';
import { apiCall } from '../../Connection/apiCall';
import COLORS from '../../const/Colors';
import styles from './styleExpense';



const MyExpenseDetails = ({ navigation,route }) => {

   const [ loading, setLoading ] = useState(false);
   const [ CategoryName, setCategoryName ] = useState('');
   const [ Amount, setAmount ] = useState('');
   const [ Description, setDescription ] = useState('');
   const [ ItemImg, setItemImg ] = useState();
  
   
   const userid = route.params.id;
   console.log( "userData", userid)
  
  
  const ExpenseId = async () =>  {
   setLoading(true)
  try {
    const result = await apiCall.expenseId(userid);
     console.log("result", result.data.expense)
      setLoading(false)
      setItemImg(result.data.expense.category?.img)
      setCategoryName(result.data.expense.category?.name)
      setAmount(result.data.expense.ammount)
      setDescription(result.data.expense.description)
      
      } catch (error) {
    console.log("🚀 ~ file: expensedetails.js:58 ~ expensedetails ~ error", error)
     setLoading(false)
    
  }
 }


 const ExpenseUpdate = async () =>  {
  try {
   const result = await apiCall.updateExpense(userid);
    console.log("result", result.data.expense)
     setCategoryName(result.data.expense.category?.name)
     setAmount(result.data.expense.ammount)
     setDescription(result.data.expense.description)
     
     } catch (error) {
   console.log("🚀 ~ file: expensedetails.js:58 ~ expensedetails ~ error", error)
   
 }
}


 useEffect(() => {
ExpenseId()
 }, []);


  return (

    <SafeAreaView style={{ flex: 0.30, backgroundColor: "#F2FEFA" }}>
      <View style={styles.header}>
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 25 }} onPress={() => navigation.goBack()}>
          <Image source={require("../../Images/AddExpense/arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Expense Detail</Text>
      </View>
      {
        loading?
        <ActivityIndicator size={'large'} color={"black"} style={{marginTop:20}} />
        :
         
        <View style={styles.ViewCard}>
        <Text style={{ marginLeft: 16,color:'#787878',marginTop:15}}>Category</Text>
        <View style={styles.viewdata}>
        <Image source={{ uri: ItemImg}} style={{height:15,width:15,marginLeft:10,alignSelf:'center'}} resizeMode='cover' />
        <Text style={{marginLeft:8,marginTop:12,fontSize:15}}>{CategoryName}</Text>
        
        </View>
        
        <View style={{ marginTop:15 }}>
        <Text style={{ marginLeft: 15,marginTop:10 }}>Add Amount </Text>
        <View style={styles.viewamount}>
        <Text style={styles.textamount}>${Amount}</Text>
        </View>
        </View>   
        
        <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 15 }}>Description</Text>
        <View style={styles.viewadd}>
        <Text style={styles.textadd}>{Description}</Text>
        </View>
        </View>
        
        <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 15 }}>Attachment</Text>
        <TouchableOpacity>
        <View style={styles.viewfile}>
        <Image source={require("../../Images/file.png")} />  
        </View>
        </TouchableOpacity>
        </View>
        
      <View style={styles.viewicons}>
        <TouchableOpacity>
        <Image source={require('../../Images/edit.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
        <Image source={require('../../Images/forward.png')} style={{marginRight:10}} />
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image source={require('../../Images/delete.png')} style={{tintColor:COLORS.cyanblue}}/>
        </TouchableOpacity>
        </View>
        
        </View>
        
      }

    </SafeAreaView>


  );
}


export default MyExpenseDetails;