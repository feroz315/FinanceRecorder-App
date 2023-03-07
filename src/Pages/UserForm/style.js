import { StyleSheet,Dimensions } from "react-native";
import COLORS from '../../const/Colors';


const SPACING = 10;
const { width, height } = Dimensions.get('window');


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
      marginTop: 15,
      width: width * 0.93,     
      alignSelf:'center'
    },
    viewphone: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.81,
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
      width: width * 0.81,
      borderRadius: 10,
      height:40 ,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: "#007BFF",
      marginTop: 16
    },
    viewconfusername: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.81,
      borderRadius: 10,
      height: 40,
      borderWidth: 1,
      borderColor: "#007BFF",
      marginTop: 16
    },
    viewbtn: {
      padding: SPACING * 0.5,
      backgroundColor: "#007BFF",
      borderRadius: 10,
      alignItems: "center",
      width: width * 0.73,
      height: 35,
      alignSelf:'center',
      marginTop: 25,
      marginRight:10
    },
    btntext: {
      color: COLORS.white,
      fontSize: 19,
      alignSelf:'center',
      fontFamily:"Poppins-Medium",
      fontWeight:"500"
            
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