import React, { useState,useEffect,useRef } from 'react';
import { View,Text,Image,SafeAreaView,TextInput,TouchableOpacity, ActivityIndicator } from 'react-native';
import { apiCall } from '../../Connection/apiCall';
import COLORS from '../../const/Colors';
import styles from './styleExpense';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';




const MyExpenseDetails = ({ navigation,route }) => {

   const [ loading, setLoading ] = useState(false);
   const [ CategoryName, setCategoryName ] = useState('');
   const [ Amount, setAmount ] = useState('');
   const [ Description, setDescription ] = useState('');
   const [ ItemImg, setItemImg ] = useState();
   const [ Data, setData ] = useState([]);


   
   const userid = route.params.id;
  
  

 const ExpenseId = async () =>  {
   setLoading(true)
  try {
    const result = await apiCall.expenseId(userid);
     console.log("🚀 ~ file: MyExpenseDetails.js:31 ~ ExpenseId ~ result:", result.data.expense)
      setLoading(false)
      setItemImg(result.data.expense.category?.img)
      setCategoryName(result.data.expense.category?.name)
      setAmount(result.data.expense.ammount)
      setDescription(result.data.expense.description)
      setData(result.data.expense)
    
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

const Sharedata = async () => {
  const shareoptions = {
    message: "Share with your friends",
  }
  try {
    let itemshare = await Share.open(shareoptions)  
  } catch (error) {
    console.log("first",error)
    
  }
}

async function Remove() {
  try {
    const result = await apiCall.deleteId(userid);
    console.log("🚀 ~ file: MyExpenseDetails.js:77 ~ Remove ~ result:", result)
    setCategoryName("")
    setItemImg("")
    setAmount("")
    setDescription("")
   
   } 
  catch (error) {
    console.log("Testexpense", error)
  }
}


 useEffect(() => {
ExpenseId()
 }, []);

 
 
return (
    <SafeAreaView style={{ flex: 0.30, backgroundColor: "#EFFAFD" }}>
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
        <Image source={{ uri: ItemImg ? ItemImg : null }} style={{height:17,width:20,marginLeft:10,alignSelf:'center'}} resizeMode='cover' />
        <TextInput style={{marginLeft:7,fontSize:16}} value={CategoryName} onChangeText={() => setCategoryName()} />


        </View>
        
        <View style={{ marginTop:15 }}> 
        <Text style={{ marginLeft: 15,marginTop:10 }}>Add Amount </Text>
        <View style={styles.viewamount}>
        <Text style={styles.textamount}>${Amount}</Text>
        <TextInput style={{alignSelf:"center",fontWeight:"600",marginTop:20,fontSize:25}} value={Amount} onChangeText={() => setAmount()} />

        </View>
        </View>   
        
        <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 15 }}>Description</Text>
        <View style={styles.viewadd}>
        <TextInput style={{marginLeft:10,fontWeight:"500",marginTop:10,fontSize:16}} value={Description} onChangeText={() => setDescription()}/>

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
        <TouchableOpacity onPress={() => ExpenseUpdate()}>
        <Image source={require('../../Images/edit.png')} style={{width:35}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Sharedata()}>           
        <Image source={require('../../Images/forward.png')} style={{marginRight:10}} />
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => Remove()}>
        <Image source={require('../../Images/trash.png')} style={{tintColor:"#FF6161"}}/>
        </TouchableOpacity> 
          
        </View>
        
        </View>
        
      }

    </SafeAreaView>

  );
}


export default MyExpenseDetails;
