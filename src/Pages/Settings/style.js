import { StyleSheet ,Dimensions} from "react-native";
import COLORS from '../../const/Colors';

const { height,width} = Dimensions.get('window');



const styles = StyleSheet.create({

    viewheader:{
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems: 'center',
        marginTop: 20, 
        marginLeft: 20 
    },
    header:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    headertext1:{
        fontSize: 24, 
        fontFamily: "PTSans-Regular", 
        fontWeight: "600", 
        color: COLORS.cyanblue,
        marginRight:55, 
    },
    headertext2:{
        fontSize: 17, 
        fontFamily: "PTSans-Regular", 
        fontWeight: "300",
        marginRight:150, 
    },
    viewuser:{
        backgroundColor: "#F5F5F5", 
        width: width * 0.1, 
        height: 45, 
        borderRadius: 10 
    },
    allcards:{
        flexDirection: "column", 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        marginTop: 35,
        marginLeft:10
    },
    viewcard1:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginLeft: 10 
    },
    viewtext:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft:15 
    },
    User:{
        fontSize: 14, 
        fontFamily: "PTSans-Regular",
        marginRight:35
 
    },
    name1:{
        fontSize: 17, 
        fontFamily: "PTSans-Regular", 
        color: COLORS.cyanblue, 
        marginRight:20
        
    },
    viewcard2:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop:10, 
        marginLeft: 10 
    },
    viewtext2:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft:20
    },
    Email:{
        fontSize: 15, 
        fontFamily: "PTSans-Regular",
        marginRight:140
    },
    name2:{
        fontSize: 18, 
        fontFamily: "PTSans-Regular", 
        color: COLORS.cyanblue,
        marginRight:30
    },
    viewcard3:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop:10, 
        marginLeft: 8 
    },
    viewtext3:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft: 15 
    },
    number:{
        fontSize: 14, 
        fontFamily: "PTSans-Regular",
        marginRight:65
    },
    name3:{
        fontSize: 17, 
        fontFamily: "PTSans-Regular", 
        color: COLORS.cyanblue, 
        marginLeft: 5 
    },
    viewcard4:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop:10, 
        marginLeft: 10
    },
    viewtext4:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft: 10
    },
    pasword:{
        fontSize: 15, 
        fontFamily: "PTSans-Regular",
        marginLeft:10
    },
    viewcard5:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop:10, 
        marginLeft: 10
    },
    viewtext5:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        marginLeft: 20
    },
    curreny:{
        fontSize: 13, 
        fontFamily: "Roboto"
    },
    name4:{
        fontSize: 17, 
        fontFamily: "PTSans-Regular", 
        color: COLORS.cyanblue,
        
    },
    viewcard6:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop:10,
        marginLeft: 12 
    },
    viewtext6:{
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft: 22 
    },
    contact:{
        fontSize: 15, 
        fontFamily: "PTSans-Regular" 
    },
    viewcard7:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop:10, 
        marginLeft: 12 
    },
    viewtext7:{
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginLeft:20
    },
    name7:{
        fontSize: 15, 
        fontFamily: "PTSans-Regular" 
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        },
        modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        },
        button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        },
        buttonOpen: {
        backgroundColor: '#F194FF',
        },
        buttonClose: {
        backgroundColor: '#2196F3',
        },
        textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        },
        modalText: {
        marginBottom: 15,
        textAlign: 'center',
        },   
});


export default styles;