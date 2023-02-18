import { StyleSheet } from "react-native";
import COLORS from '../../const/Colors';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
 
    },
    viewbtn:{
      marginTop:330,
      backgroundColor:"#007BFF",
      height:55,width:"80%",
      borderRadius:10,
      marginHorizontal:40, 
      justifyContent:'center',
      alignItems:'center'
    },
    btntext:{
      fontSize:18,
      color:COLORS.white,
      fontFamily:'Montserrat-Italic',
      lineHeight:18
    },
    viewacount:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:30
    },
    acouttext:{
      fontSize:14,
      color:COLORS.grey,
      fontFamily:'Montserrat-Regular'
    },
    logintext:{
      fontSize:14,
      color:"#007BFF",
      fontFamily:'Montserrat-Regular'
    }
 
  });

  export default styles;