import { StyleSheet,Dimensions  } from "react-native";
import COLORS from "../../const/Colors";
const { width } = Dimensions.get("screen");
const SPACING = 10;


const styles = StyleSheet.create({
      
    container: {
        flex:0.90,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30    
        
    },
    image: {
        width: width * 0.90,
        height: 290,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
               
    },
    textView:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:20,   
                
    },
    text:{
        fontFamily:"OpenSans-Light",
        fontWeight:'700',
        fontSize:38,
        color:COLORS.lighdark      

    },
    contentView:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:20,
        marginTop:10 
    
    },
    contenttext:{
        fontFamily:"Montserrat-Bold",
        fontSize:14,
        color:COLORS.gray      

    },
    lineview:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignSelf:'flex-start',
        marginTop:20,
        marginLeft:20,
        
    },
    line:{
        borderBottomColor:COLORS.brown,
        borderBottomWidth:6,
        width: width * 0.11,
        borderRadius:10,
    
    },
    Btn:{
        width: width * 0.40,
        height:62,
        backgroundColor: COLORS.brown,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 35,
        marginTop:40,
        marginLeft:30
    },
    btntext:{
        fontSize:16,
        color: COLORS.white,
        textAlign:'center'

        
    }
    


    
});




export default styles;