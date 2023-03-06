import { StyleSheet,Dimensions } from "react-native";
import COLORS from '../../const/Colors';

const { height,width} = Dimensions.get('window');

const SPACING = 10;


const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 8,
        fontSize: 14,
        marginTop:5,
        color:COLORS.gray

    },
    viewInput: {
        flexDirection: 'column',
        marginTop: 50,
        marginHorizontal: 35,
    },
    viewUser: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        borderRadius: 10,
        height: 37,
        
        borderColor: "#007BFF",
        borderWidth: 1
    },
    viewpasword: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        borderRadius: 10,
        height: 37,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "#007BFF",
        
    },
    viewRF: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
               
    },
    viewtext: {
        flexDirection: 'row',
        
    },
    textRM: {
        fontSize: 14,
        fontWeight: '400',
        marginTop:4,
        color:COLORS.gray

    },
    textFP: {
        fontSize: 14,
        fontWeight: '400',
        marginRight: 60,
        marginBottom:10,
        color:COLORS.gray
       
    },
    viewbtn: {
        paddingVertical: SPACING * 0.4,
        backgroundColor: "#007BFF",
        borderRadius: 10,
        alignItems: "center",
        width: width * 0.80,
        marginRight:45,
        
    },
    logintext: {
        color: COLORS.white,
        fontSize: width * 0.04,
        fontWeight: "500",
        
    },
    viewline: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 60
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
        marginLeft: 30,
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
    viewfooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        marginRight: 60,
        marginBottom:20
    },
    aconttext: {
        fontSize: 14,
        color: COLORS.gray,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },
    signtext: {
        fontSize: 13,
        color: "#007BFF",
        textAlign: 'center',
        fontFamily: 'Roboto-Medium'
    }
});


export default styles;