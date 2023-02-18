import { StyleSheet,Dimensions,StatusBar } from "react-native";
import COLORS from '../../const/Colors';


const { height, width } = Dimensions.get('window');
const SPACING = 10;



const styles = StyleSheet.create({

    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: "center",
      marginTop: 30,
      marginLeft: 10,
    },
    headerimage: {
      width: width * 0.17,
      height: 62,
      marginLeft: 5,
      borderRadius:15
   },
    headertextview: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15
    },
    headertext1: {
      fontSize: SPACING * 1.7,
      color: COLORS.dark,
      marginBottom: 2
    },
    ViewCard: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 20,
      backgroundColor: "#EFF9FC",
      elevation: 25,
      marginVertical: 3,
      paddingVertical:10,
      width: width * 0.9,
      borderRadius: 5,
      marginLeft:15,
      
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
      fontSize: 22,
      fontFamily: 'Roboto-Regular',
      fontWeight:"700",
      color: COLORS.gray,

    },
    cards: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      backgroundColor: COLORS.white,
      marginVertical: 3,
      height: 50,
      width: width * 0.9,
      borderRadius: 10,
      alignSelf:'center'
      // marginHorizontal: 5,
      // marginLeft:15
    },
    viewcardcenter:{
      position:'absolute',
      left:0,
      right:0,
      top:0,
      bottom:0
    },
    viewtext:{
      flexDirection: 'column', 
      justifyContent: 'center',
      marginHorizontal: 20, 
      marginTop: 5 
    },
    viewcenter:{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      alignSelf:'center'
    },
    textrank:{
      fontSize: 18, 
      fontWeight: '400', 
      fontFamily: 'Roboto-Regular',
      color:COLORS.gray
    },
    viewItem:{
      fontSize: 14, 
      fontFamily: 'Roboto-Regular',
      color:COLORS.gray
    },
    viewcarditems:{
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginLeft: 10,
    },
    itemtext:{
      marginLeft: 10, 
      fontSize: 17,
      color: "#007BFF"
    },
    itemprice:{
      fontSize: 17, 
      color: COLORS.gray, 
      marginRight: 15,
   },
    viewbtn:{
      backgroundColor: "#007BFF",
      borderRadius: 10,
      alignItems: "center",
      width: width * 0.6,
      height:45,
      marginLeft: 70,
      marginTop: 25
    },
    textbtn:{
      color: COLORS.white,
      fontSize: 19,
      fontWeight: "600",
      marginTop:8,
      fontFamily: 'Roboto-Regular',
      marginLeft:10,
    }
  
  
  });
  



export default styles;