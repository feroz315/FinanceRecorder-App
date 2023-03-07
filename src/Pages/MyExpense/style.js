import { StyleSheet,Dimensions } from "react-native";
import COLORS from '../../const/Colors';

const { height, width } = Dimensions.get('window');



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
    
      marginRight:10,
      width: '50%',
      height: 40,
      paddingLeft: 15,
      marginTop: 15
    },
    viewbtn:{
      backgroundColor: "#007BFF",
      borderRadius: 10,
      alignItems: "center",
      width: width * 0.2,
      height:25,
      alignSelf:'center',
      marginTop: 10,
      
   },
    textbtn:{
      color: COLORS.white,
      fontSize: 14,
      fontWeight: "600",
      marginTop:8,
      fontFamily: 'Roboto-Regular',
      
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
    viemsg:{
      fontSize:width * 0.05,
      alignSelf:'center',
      flex:1,
      marginTop:200,
      fontFamily: 'Roboto-Regular',
      color:COLORS.gray
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
      marginLeft:5
     
    },
    viewbtn:{
      backgroundColor:COLORS.cyanblue, 
      height: 35, 
      width: width * 0.50,
      alignSelf:'center',
      borderRadius: 15, 
      elevation: 10,
      marginBottom:20
      
    },
    textbtn:{
      alignSelf:"center", 
      marginTop: 4, 
      fontSize: 18,
      marginLeft:15,
      fontWeight: '600',
      color:COLORS.white
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
      height: height * 0.14,
      width: width * 0.96,
      borderRadius: 5,
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