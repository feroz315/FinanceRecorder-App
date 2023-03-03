import {StyleSheet, Dimensions, I18nManager} from 'react-native';
import {FONTS} from '../../constants/assets';
import color from '../../constants/color';

//Color

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
  },

  contStyle: {
    // marginTop: height * 0.04,
    // paddingBottom: height * 0.04,
    flexGrow: 1,
  },
  txt1: {
    fontSize: width * 0.075,
    color: 'black',
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
  },
  txt2: {
    fontSize: width * 0.045,
    color: color.BLACK,
    fontFamily: FONTS.ROBOTTO_BOLD,
    // textAlign:'center'
  },
  MainCon: {
    width: width,
    alignItems: 'center',
  },
  textCon: {
    marginTop: height * 0.09,
    // backgroundColor:'red',
    width: width * 0.7,
  },
  textCon1: {
    // marginTop:height*0.01,
    // backgroundColor:'green',
    width: width * 0.8,
  },
  TextFieldCon: {
    width: width * 0.8,
    borderColor: color.STROKE_COLOR,
    borderWidth: 1,
    marginBottom: height * 0.03,
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.02,
    paddingLeft: width * 0.04,
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextMainCon: {
    marginTop: height * 0.03,
  },
  TextInp: {
    fontFamily: FONTS.REGULAR,
    fontSize: width * 0.035,
    color: color.BLACK,
    width: '90%',

    // backgroundColor:'black',
    // height: 40,
  },
  ForgotView: {
    width: width * 0.8,
    alignItems: 'flex-end',
  },
  ForgotViewText: {
    fontFamily: FONTS.BOLD,
    fontSize: width * 0.04,
    color: color.BLACK,
  },
  bottomBtn: {
    width: width * 0.8,
    paddingVertical: width * 0.01,
    backgroundColor: color.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.09,
    marginTop: height * 0.085,
    height: 40,
  },
  bottomBtnText: {
    fontFamily: FONTS.Medium,
    color: color.WHITE,
    fontSize: width * 0.04,
  },
  ForgotViewText1: {
    // position:'absolute',
    // bottom:0,
    fontFamily: FONTS.ROBOTTO_REGULAR,
    fontSize: width * 0.035,
    color: color.BLACK,
    marginTop: width * 0.25,
  },
  ForgotViewText2: {
    color: color.ORANGE,
  },
  LogoImg: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    marginVertical: width * 0.09,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  TextFieldConImg: {
    width: width * 0.07,
    height: width * 0.07,
    bottom: width * 0.01,
  },
});
