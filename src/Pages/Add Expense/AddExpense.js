import React, { useState,useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity,Modal,Pressable,FlatList,TextInput,Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SelectList } from 'react-native-dropdown-select-list';
import styles from './style';
import COLORS from '../../const/Colors';
import { apiCall } from '../../Connection/apiCall';
import Icon from 'react-native-vector-icons/FontAwesome';


const { height,width} = Dimensions.get('window');
 

const AddExpense = ({ navigation }) => {
  const [ Apidata, setApidata ] = useState([]); 
  const [data, setData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [ Amount, setAmount] = useState(""); 
  const [ Description, setDescription] = useState(""); 
  const [ Otpmsg, setOtpmsg ] = useState(""); 
  

 
  async function AllCategory() {
      try {
             let res = await apiCall.category();
              setApidata(res.data.categories);
          
          }
            catch (error) {
            console.log("data",error)
       }
     }
    

  const Addexpense = async () =>  {
    let items = {
      categoryId:data._id,
      ammount:Amount,
      description:Description,
        }
     console.log("first",items)
    try {
        
     let res = await apiCall.createaddExpense(items)
     if(res.status === true && res.responseCode === 200){
       navigation.navigate("Homescreen")
    }
  } catch (error) {
    console.log("🚀 ~ file: AddExpense.js:58 ~ Addexpense ~ error", error)
    
  }
 }

//  useEffect(() => {
//   Addexpense();
//  }, []);

 return (

    <SafeAreaView style={{ flex:1, backgroundColor: "#F2FEFA" }}>
      <View style={styles.header}>
        <TouchableOpacity style={{ marginTop: 10, marginLeft: 10 }} onPress={() => navigation.navigate("Homescreen")}>
          <Image source={require("../../Images/AddExpense/arrow.png")} />
        </TouchableOpacity>
        <Image source={require("../../Images/AddExpense/Add.png")} style={{ marginRight: 120, width: 150, height: 25 }} />

      </View>

      <View style={styles.ViewCard}>
          <Text style={{ marginLeft: 15,marginTop:15 }}>Select Category</Text>

        <TouchableOpacity style={styles.viewcategory} onPress={() => setModalVisible(!modalVisible)}>
          <FontAwesome name="chevron-down" size={15} color={COLORS.gray} style={{marginRight:10,marginBottom:5}}/>
            <Text style={styles.input}>{data?.name != null ? data?.name : 'Select'}</Text>
            </TouchableOpacity>
          
      <View style={styles.centeredView}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onShow={() => AllCategory()}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible)}}>
            
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
           <FlatList
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              data={Apidata}
              numColumns={3}
              renderItem={({ item }) => (
                <View style={{margin:9,marginTop:10,}}>
              <TouchableOpacity onPress={() => [setData(item), setModalVisible(false)]}>
                 <Text>{item.name}</Text>                               
                  </TouchableOpacity>
                </View>
              )}/>
               </View>
            </View>
          </Modal> 
             </View>
    
          <View style={{ alignSelf:'auto'}}>
            <Text style={{ marginLeft: 15, marginTop: 10 }}>Add Amount</Text>
            <View style={styles.viewamount}>
              <TextInput style={styles.textamount} placeholder="$00.00" value={Amount} onChangeText={(val) => setAmount(val)}/> 
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ marginLeft: 15 }}>Description</Text>
            <View style={styles.viewadd}>
              <TextInput style={styles.textadd} placeholder="Add Descripation" value={Description} onChangeText={(val) => setDescription(val)}/>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ marginLeft: 15 }}>Attachment</Text>
            <TouchableOpacity>
              <View style={styles.viewattach}>
                <Feather name='plus' size={18} style={{ marginTop: 3, textAlign: 'center' }} />
              </View>
            </TouchableOpacity>
          </View>

     
        <View style={styles.messageView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={Otpmsg}
            onShow={() => AllCategory()}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setOtpmsg(!Otpmsg)}}>
            
          <View style={styles.messageView}>
             <View style={styles.modalViewmessage}>
               <Image source={require("../../Images/Icon material.png")} />
               <Image source={require("../../Images/ios-donel.png")} />
               <Image source={require("../../Images/text.png")} />
              
            <TouchableOpacity style={styles.viewbtn}
               onPress={() => navigation.navigate("Homescreen")}>
               <Text style={styles.textbtn}> Continue</Text>
               </TouchableOpacity>
                </View>
            </View>
          </Modal>
        </View>
    
          <TouchableOpacity style={styles.viewbtn}
            onPress={() => Addexpense()}>
            <Text style={styles.textbtn}> Submit</Text>
          </TouchableOpacity>
        </View>


    

    </SafeAreaView>


  );
}




export default AddExpense;


