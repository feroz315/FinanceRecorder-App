
import { StyleSheet,Dimensions  } from 'react-native';
import COLORS from '../../const/Colors';


const { width, height } = Dimensions.get('window');



const styles = StyleSheet.create({
    container: {
      flex: 0.8,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
  
    },
    fadingContainer: {
      padding: 20,
    },
    
    fadingText: {
      fontSize: 28
    },
  
    viewtext:{
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginHorizontal: 40,
      marginTop:210
    },
    
    text: {
      fontSize: 23, 
      fontWeight: '500',
      marginTop:10, 
      fontFamily: 'Montserrat-Regular',   
    },
    text1: {
      fontSize: 15, 
      marginTop:10,
      fontFamily: 'Montserrat-Regular',
    },
    viewbtn:{
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center',
      marginTop:40
    },
    btn: {
      backgroundColor: COLORS.cyanblue,
      height: 50,
      width: "27%",
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: 80,
    },
    nextbtn:{
      fontSize: 19, color: COLORS.white, 
      fontFamily: 'Montserrat-regular', 
      textAlign: 'center', 
      marginTop: 10, 
    },
    skipbtn:{
      fontSize: 15, 
      color: COLORS.cyanblue, 
      fontFamily: 'Montserrat-Regular',
      marginTop:5
    }
   
  });
  
  export default styles;