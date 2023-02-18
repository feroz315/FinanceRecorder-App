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
        paddingLeft: 10,
        fontSize: 14,
        color:COLORS.gray

    },
    viewInput: {
        flexDirection: 'column',
        marginTop: 50,
        marginHorizontal: 30,
    },
    viewEmail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        borderRadius: 10,
        height: 37,
        paddingLeft: 5,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    viewtext: {
        flexDirection: 'row',
        marginLeft: 30,
    },
    textRM: {
        fontSize: 14,
        fontWeight: '400',
        marginTop:4,
        color:COLORS.gray

    },
    textFP: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: '400',
        marginRight: 90,
        marginBottom:10,
        color:COLORS.gray
       
    },
    viewbtn: {
        padding: SPACING * 0.4,
        backgroundColor: "#007BFF",
        borderRadius: 10,
        alignItems: "center",
        width: width * 0.75,
        marginLeft: 40,
        marginTop: SPACING * 2
    },
    logintext: {
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
        paddingRight: 50
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
        marginTop: 20,
        marginRight: 60
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