
import { StyleSheet ,Dimensions} from "react-native";
import COLORS from '../../const/Colors';

const { height,width} = Dimensions.get('window');


const styles = StyleSheet.create({

    header: {
        marginTop: 25,
        marginLeft: 20
    },
    headertext: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        color: "#607490",
        marginRight: 20
    },
    ProgressCard: {
        marginTop: 20,
        backgroundColor: "#FFF",
        elevation: 25,
        height: height * 0.27,
        width: width * 0.9,
        borderRadius: 10,
   },
    ViewCard: {
        backgroundColor: "#FFF",
        width: width * 0.92,
        height: height * 0.43,
        elevation: 10,
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 10,
        
    },
    ViewProgress: {
        backgroundColor: "#F5F5F5",
        marginTop: 20,
        marginLeft: 5,
        borderRadius: 10,
        height: 40,
        width: "95%"
    },
    Viewitems: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Viewleftitems: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    Viewrightitems: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    leftitems: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        
    },
    rightitems: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
             
    },
    viewpercentge:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'absolute', 
        marginTop: 160,
         
    },
    text0:{
        marginLeft: 10, 
        fontSize: 14, 
        color: '#F5F5F5',
        marginTop:3

    },
    text100:{
        marginLeft: 255, 
        fontSize: 14, 
        color: '#F5F5F5'
    },
    viewspending:{
        flexDirection: 'column', 
        justifyContent: 'center', 
        marginLeft: 120, 
        alignItems: 'center', 
        marginTop: 70, 
        position: 'absolute'
    },
    spending:{
        fontSize: 12, 
        fontWeight: '500',
        padding: 5
    },
    totalamount:{
        fontSize: 34, 
        fontWeight: '600', 
        color: "#607490"
    },
    textheading:{
        marginLeft: 20, 
        marginTop: 10, 
        fontSize: 16, 
        color: "#607490", 
        fontWeight: '500'
    },
    viewImg:{
        backgroundColor: "#F5F5F5", 
        width: 45, 
        height: 45, 
        borderRadius: 20
    },
    viewitem:{
        marginLeft: 10,
        marginBottom:3
    },
    text:{
        fontSize: 16, 
        color: "#607490"
    },
    price:{
        fontSize: 18, 
        color: COLORS.cyanblue, 
        fontWeight: '500', 
        marginLeft: 5 
    },
    line1:{
        borderWidth: 0.2, 
        width: width * 0.25, 
        marginLeft: 25, 
        borderColor: "#607490", 
        marginTop: 5 
    },
    line2:{
        borderWidth: 0.2, 
        width: "80%", 
        marginLeft: 25, 
        borderColor: "#607490", 
        marginTop: 3 
    },
    viewrightitem:{
        backgroundColor: "#F5F5F5", 
        width: 30,
        height: 25, 
        borderRadius: 20
    },
    price2:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft: 10 
    },
    rightline:{
        borderWidth: 0.2,
        width: "85%", 
        borderColor: "#607490", 
        marginTop: 4, 
        marginLeft: 10 
    },
    rightitems2:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'center', 
        marginLeft: 12, 
        marginTop: 15
    },
    righttext2:{
        backgroundColor: "#F5F5F5", 
        width: 90, 
        borderRadius: 20,
        fontSize:14
    },
    rightprice2:{
        fontSize: 18, 
        color: COLORS.gray,
        fontWeight: '500', 
        marginLeft: 5 
    },
    righttext3:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft: 10
    }

});


export default styles;