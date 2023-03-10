import { StyleSheet,Dimensions } from "react-native";
import COLORS from '../../const/Colors';

const { height,width} = Dimensions.get('window');




const styles = StyleSheet.create({

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      marginTop: 40,
      marginLeft: 10,
    },
    headertext: {
      fontSize: 25,
      color: COLORS.dark,
      marginRight: 100,
      fontFamily: 'Montserrat-Regular'
  
    },
    ViewCard: {
      marginTop: 15,
      backgroundColor: "#FFF",
      elevation: 15,
      marginVertical: 2,
      height: height * 0.75,
      width: width * 0.8,
      borderRadius: 10,
      marginLeft: 40,
    },
    cardviewtext: {
      marginTop: 10,
      marginHorizontal: 10,
    },
    cardtext: {
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      color: COLORS.gray
    },
    text: {
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
      color: COLORS.gray
    },
    viewdata:{
      marginLeft: 16 ,
      marginTop: 20,
      width: "87%",
      height: 45,
      backgroundColor:'#F9F9F9',
      borderRadius:15, 
      flexDirection:"row"
    },
    viewamount:{
      marginTop: 10, 
      marginLeft: 15, 
      width: "88%", 
      height: 80, 
      backgroundColor: '#F9F9F9', 
      borderRadius: 10 
    },
    textamount:{
      textAlign: 'center', 
      marginTop: 20, 
      fontSize: 25, 
      fontWeight: "600"
    },
    viewadd:{
      marginTop: 10, 
      marginLeft: 15,
      fontWeight:'500', 
      width: "88%", 
      height: 80, 
      backgroundColor: '#F9F9F9',
      borderRadius: 10
    },
    textadd:{
      marginLeft: 20, 
      marginTop: 10,
      fontSize: 15, 
      fontWeight: "500"
    },
    viewfile:{
      backgroundColor: '#F9F9F9', 
      width: 30, 
      height: 25, 
      marginTop: 10, 
      marginLeft: 15, 
      borderRadius: 10,
      fontWeight:'500'
    },
    viewicons:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
          
    }
  
  })

  export default styles;