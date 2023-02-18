import { StyleSheet } from "react-native";
import COLORS from '../../const/Colors';


const SPACING = 10;


const styles = StyleSheet.create({
    input: {
      position: 'relative',
      height: '100%',
      width: '90%',
      fontFamily: 'OpenSans-Medium',
      paddingLeft: 5,
      fontSize: 14,
      color:COLORS.gray
    },
    viewInput: {
      flexDirection: 'column',
      marginTop: 25,
      marginHorizontal: 30,
      marginRight:20
    },
    viewEmail: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '85%',
      borderRadius: 10,
      height:40 ,
      marginTop: 15,
      paddingLeft: 5,
      borderColor: "#007BFF",
      borderWidth: 1
    },
    viewphone: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '85%',
      borderRadius: 10,
      height: 40,
      borderWidth: 1,
      borderColor: "#007BFF",
      marginTop: 15
    },
    viewpasword: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '85%',
      borderRadius: 10,
      height:40 ,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: "#007BFF",
      marginTop: 15
    },
    viewconfusername: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '85%',
      borderRadius: 10,
      height: 40,
      paddingLeft: 5,
      borderWidth: 1,
      borderColor: "#007BFF",
      marginTop: 15
    },
    viewbtn: {
      padding: SPACING * 0.5,
      backgroundColor: "#007BFF",
      borderRadius: 10,
      alignItems: "center",
      width: '70%',
      marginLeft: 50,
      marginTop: 25
    },
    btntext: {
      color: COLORS.white,
      fontSize: 19,
      fontWeight: "500",
    },
    viewline: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 50
    },
    line1: {
      borderBottomWidth: 1,
      borderColor: COLORS.gray,
      width: "20%"
    },
    line2: {
      borderBottomWidth: 1,
      borderColor: COLORS.gray,
      width: "20%"
    },
    viewIcons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: "center",
      marginTop: 20,
      paddingRight: 40
    },
    gmail: {
      marginLeft: 20,
      backgroundColor: COLORS.white,
      borderRadius: 10
    },
    facebook: {
      backgroundColor: COLORS.white,
      borderRadius: 10
    },
    apple: {
      marginRight: 55,
      backgroundColor: COLORS.white,
      borderRadius: 10
    },
    viewtext: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      marginRight: 60
    },
    aconttext: {
      fontSize: 14, color: COLORS.gray,
      textAlign: 'center',
      fontFamily: 'Roboto-Medium'
    },
    logintext: {
      fontSize: 14,
      color: "#007BFF",
      textAlign: 'center',
      fontFamily: 'Roboto-Medium'
    }
  
  
  });
  

  export default styles;