import { StyleSheet } from "react-native";
import COLORS from '../../const/Colors';



const styles = StyleSheet.create({
    viewheader:{
       flexDirection: "row",
       justifyContent: 'center', 
       alignItems: 'center', 
       marginTop: 50, 
       marginLeft: 100,
       
      },
    headertext: {
      fontSize: 25,
      color: COLORS.dark,
      marginRight: 100,
      fontFamily: "Roboto-Bold "
    },
    viewbar:{
      flexDirection: 'row', 
      justifyContent: "flex-start", 
      alignItems: 'center', 
      width: '90%',
      borderRadius: 20, 
      height: 37,
      paddingLeft: 10, 
      borderWidth: 1, 
      borderColor: "#fff", 
      marginTop: 20, 
      marginLeft: 20, 
      backgroundColor: "#fff" 
    },
    viewitems:{
      flexDirection: 'row', 
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    viewmonth: {
      flexDirection: "row-reverse",
      justifyContent: 'space-around',
      alignItems: 'center',
      marginRight:10,
      width: '50%',
      height: 40,
      paddingLeft: 15,
      marginTop: 15
    },
    input: {
      fontFamily: 'OpenSans',
      paddingLeft: 10,
      fontSize: 15,
      textAlign:'center'
    },
    viewcarditems:{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginLeft: 5,
      marginTop:5
    },
    items:{
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    texthead:{
      marginLeft: 10, 
      fontSize: 16, 
      color: "#007BFF"
    },
    textprice:{
      fontSize: 17, 
      fontFamily:"Montserrat-Regular",
      fontWeight:'400',
      color: "#555555", 
      marginRight: 15
    },
    textcentr:{
      fontSize: 15, 
      fontFamily:"Montserrat-Regular",
      fontWeight:'400',
      color: "#555555", 
      marginLeft:10
     
    },
    viewcalender:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      marginTop:10
    },
    viewtime:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'flex-start',
      alignSelf:'center'
    },
    ViewCard: {
      margin: 5,
      backgroundColor: "#FFF",
      elevation: 5,
      height: 110,
      width: "95%",
      borderRadius: 10,
   },
    viewimgtime:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:10,
    padding:5
   },
    input: {
      position: 'relative',
      height: '100%',
      width: '90%',
      fontFamily: 'OpenSans-Medium',
      paddingLeft: 20,
    },
   
  })

  export default styles;