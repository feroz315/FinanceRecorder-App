import { StyleSheet,Dimensions } from "react-native";
import COLORS from '../../const/Colors';

const { height,width} = Dimensions.get('window');




const styles = StyleSheet.create({

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      marginTop: 35,
      marginLeft: 10,
    },
    headertext: {
      fontSize: 25,
      color: COLORS.dark,
      alignSelf:'center',
      fontFamily: 'Montserrat-Regular'
    },
    ViewCard: {
      marginTop: 20,
      backgroundColor: "#FFF",
      elevation: 15,
      marginVertical: 2,
      height: height * 0.77,
      width: width * 0.8,
      borderRadius: 5,
      alignSelf:'center'
    },
    viewdata:{
      marginLeft: 16 ,
      marginTop: 20,
      width: "87%",
      height: 45,
      borderRadius:15, 
      flexDirection:"row"
    },
    cardviewtext: {
      marginTop: 10,
      marginHorizontal: 10,
      color:COLORS.gray
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
    viewamount:{
      marginTop: 10, 
      marginLeft: 15, 
      width: "88%",
      height: 80, 
      backgroundColor: '#F9F9F9', 
      borderRadius: 10,
      color:COLORS.gray
    },
    textamount:{
      textAlign: 'center', 
      marginTop: 10, 
      fontSize: 28, 
      fontWeight: "600",
      color:COLORS.gray
    },
    viewadd:{
      marginTop: 10, 
      marginLeft: 15, 
      width: "88%", 
      height: 90, 
      backgroundColor: '#F9F9F9', 
      borderRadius: 10
    },
    textadd:{
      marginLeft: 10,
      fontSize: 13, 
      fontWeight: "400",
      color:COLORS.gray 
    },
    viewattach:{
      backgroundColor: '#F9F9F9',
      width: 30, 
      height: 25, 
      marginTop: 10, 
      marginLeft: 15, 
      borderRadius: 10
    },
    viewbtn:{
      backgroundColor: "#F9F9F9", 
      height: 35, 
      width: width * 0.55,
      alignSelf:'center', 
      borderRadius: 15, 
      elevation: 10,
      marginBottom:20
    },
    textbtn:{
      textAlign: 'center', 
      marginTop: 5, 
      fontSize: 18,
      fontWeight: '600',
      color:COLORS.gray
    },
    input: {
      fontFamily: 'OpenSans',
      fontSize: 15,
      textAlign:'center',
      marginLeft:5,
      marginTop:3
  },
    viewcategory: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: 'center',
      marginRight:15,
      width: '92%',
      borderRadius: 10,
      height: 42,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: COLORS.grey,
      marginTop: 15
  },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
    },
    messageView:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
    },
    modalViewmessage:{
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      height:"40%",
      width:"60%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalView: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      height:"72%",
      width:"85%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    SubmitView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
    },
    OTPView:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
    },
    modalOTPmessage:{
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      height:"40%",
      width:"60%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalViewOTP: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      height:"72%",
      width:"85%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  })


  
  export default styles;