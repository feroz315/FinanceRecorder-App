import React, { useState,useEffect, useRef } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image,FlatList,ActivityIndicator,Dimensions } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from './style';
import { apiCall } from '../../Connection/apiCall';
import moment from "moment";
import { Swipeable } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import COLORS from '../../const/Colors';


const { height, width } = Dimensions.get('window');


const MyExpense = ({ navigation,route }) => {
  const isFocused = useIsFocused();
  const [ AllData, setAllData] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ filter,setFilterData ] = useState([]);
  const [ search,setSearch ] = useState(''); 
  const [val, setSelected] = useState('');


  const data = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
 
 const openref = useRef();
  
 

  async function AllExpense() {
    setLoading(true)
    try {
      const res = await apiCall.allExpense();
        setLoading(false)
        setAllData(res.data.allExpense);
        setFilterData(res.data.allExpense)
        
    } 
    catch (error) {
      console.log("Testexpense", res)
      setLoading(false)
    }
}
  
const SearchFilter = (text) => {
  if(text){
    const newData = AllData.filter((item) => {
    const newItem = item.category.name ? item.category.name.toUpperCase() : ''.toUpperCase(); 
    const textData = text.toUpperCase();
    return newItem.indexOf(textData) > -1;

    })
    setFilterData(newData);
    setSearch(text);
  }else{
    setFilterData(null);
    setSearch(text);
  }
  
}

const rightSide = (id) => {
  return(
   <View>
    <Image source={require('../../Images/red.png')} resizeMode="contain" style={{height:"100%"}}/>
    <TouchableOpacity onPress={() => {
      Remove(id)
    }} 
     style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:40,marginLeft:10,position:'absolute'}}> 
    <Image source={require('../../Images/delete.png')}/>
    <Image source={require('../../Images/namedele.png')}/>
    </TouchableOpacity>
   </View> 
  )
}

async function Remove(id) {
  try {
    const result = await apiCall.deleteId(id);
    AllExpense()
     } 
  catch (error) {
    console.log("Testexpense", error)
  }
}



useEffect(() => {
  AllExpense();
  },[isFocused])
 
  
  return (
    
 <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
  <View style={{height:width * 0.43 , backgroundColor: "#EFFAFD" }}>
   <View style={styles.viewheader}>
    <Text style={styles.headertext}>My Expense</Text> 
        </View>
        
      <View style={styles.viewbar}>
      <View style={styles.viewitems}>
      <Image source={require('../../Uilites/Icons/search.png')} style={{ width: 30 }} />
      <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#818181" value={search} onChangeText={(text) => SearchFilter(text)}/>
      <Image source={require('../../Uilites/Icons/setting.png')} style={{ marginRight: 15, width: 30, height: 25, color: "#000" }} />
        </View>
      </View>
     </View>
 
     <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>       
 <View style={styles.viewmonth}>
 <SelectList
  setSelected={(val) => setSelected(val)}
  onSelect={() => AllExpense()}
  data={data}
  maxHeight={430}
  inputStyles={{fontSize:15,color:"#555555"}}
  dropdownTextStyles={{color:"#555555"}}
  save="value"
  boxStyles={{ borderRadius:10,borderWidth:0, width: 140,}}
  search={false}
  dropdownStyles={{ borderWidth:1,width:140, marginTop:30,marginLeft: 5,zIndex:1,position:'absolute',backgroundColor:"#F2FEFA" }}
  borderWidth={0.2}
  placeholder="This Month" />
    </View>
    
      
  </View>

  {
    loading?
    <ActivityIndicator size={'large'} color={"#000"} style={{marginTop:5}}/>:
    !filter.length > 0 ? <Text style={styles.viemsg}>There are no more Items Available</Text> : 
     <FlatList
      showsHorizontalScrollIndicator={false}
      data={filter}
      renderItem={({ item}) => {
        return (    
        <Swipeable renderRightActions={()=>(rightSide(item._id))} 
         onSwipeableOpen={() => console.log("first",item._id)}>
        
          <TouchableOpacity style={styles.ViewCard} onPress={() => navigation.navigate("ExpenseDetails",
          {
            id:item._id
          }         
          )}>
         
         <View style={styles.viewcarditems}>
         <View style={styles.items}>
         <Image source={{ uri: item.category.img}} style={{height:16,width:20,marginLeft:5}} resizeMode='cover'/>
         <Text style={styles.texthead}>{item.category.name}</Text>
        </View>
        <Text style={styles.textprice}>${item.ammount}</Text>
        </View>
        <View style={{ marginTop:10,marginLeft:5 }}>
        <Text style={styles.textcentr}>{item.description}</Text>
        </View>
        
        <View style={styles.viewcalender}>
        <View style={styles.viewtime}>
        <Image source={require('../../Uilites/Icons/Calender.png')} style={{ marginTop: 3, marginLeft: 8, width: 15, height: 15 }} />
        <Text style={{marginLeft:10,fontSize:14 }}>{moment(item.createdAt).format("DD MMMM YYYY")}</Text>
        </View>
        
        <View style={styles.viewimgtime}>
         <Image source={require('../../Uilites/Icons/Time.png')} style={{ width: 15, height: 15, marginTop: 3,marginRight:5 }} />
         <Text style={{fontSize:14}}>{moment(item.createdAt).format("h:mm A")}</Text>
         </View>
         </View>
         
         </TouchableOpacity>
         </Swipeable>
            
          )}}/>
           
        }

          <TouchableOpacity style={styles.viewbtn}    
              onPress={() => navigation.navigate("AddExpense")}>
              <Text style={styles.textbtn}>Add Expense</Text>
              </TouchableOpacity>       
     </SafeAreaView>
                
  );
}




export default MyExpense;

