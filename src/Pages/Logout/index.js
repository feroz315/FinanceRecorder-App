import React, { useState } from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';

//local imports
import styles from './styles';
import MyStatusBar from '../../components/StatusBar';
import color from '../../constants/color';
//third party library
import axios from '../../utils/axios';
import Environment from '../../constants/apiEndPoints';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/action/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {icons, images} from '../../constants/assets';
import LinearGradient from 'react-native-linear-gradient';
// import messaging from '@react-native-firebase/messaging';
// import

// dimenstion
const {width, height} = Dimensions.get('window');

const Index = ({navigation, ...props}) => {
  // const getFcmToken = async ()=>{
  //     let fcmToken = await AsyncStorage.getItem('fcmToken')
  //     setFtoken(fcmToken)
  //     console.log(fcmToken,'oldToken')
  //     if(!fcmToken){
  //         try {
  //             const fcmToken=await messaging().getToken()
  //             if(fcmToken){
  //               await AsyncStorage.setItem('fcmToken',fcmToken)
  //               setFtoken(fcmToken)
  //               console.log('new Token',fcmToken)
  //             }
  //         } catch (error) {
  //             console.log(error,'err in fcmToken')
  //         }
  //     }
  // }
  const dispatch = useDispatch();
  const detail = useSelector(state => state.userReducer);
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [vali, setVali] = useState(false);
  const [emailvali, setEmailVali] = useState(false);
  const [passvali, setPassVali] = useState(false);
  const [loader, setloader] = useState(false);
  const [ftoken, setFtoken] = useState('');
  const [showPass, setShowPass] = useState(true);
  const FieldData = [
    {
      type: 'email',
      secure: false,
      placeholder: 'Username',
    },
    {
      type: 'password',
      secure: true,
      placeholder: 'Password',
    },
  ];

  const inputField = (
    placeholder,
    secure,
    type,
    state,
    setState,
    both,
    em,
    ps,
  ) => (
    <View style={[styles.TextFieldCon,Platform.OS=='ios'&&{paddingVertical:width*0.02}]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color.TEXT_GRAY}
        style={[styles.TextInp]}
        keyboardType={
          type == 'email'
            ? 'email-address'
            : type == 'phone'
            ? 'number-pad'
            : 'default'
        }
        secureTextEntry={secure}
        onChangeText={e => {
          setState(e);
          // console.log(state)
        }}
        value={state}
      />
    </View>
  );
  const btn = onPress => (
    <TouchableOpacity onPress={onPress} style={styles.bottomBtn}>
      <Text style={styles.bottomBtnText}>Sign In</Text>
    </TouchableOpacity>
  );
  const handleLogin = async () => {
    // axios.post
    if (email === '' && Password === '') {
      setVali(true);
    } else {
      setloader(true);
      let config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      };
      let param = {
        email: email,
        // username: 'mangotech',
        password: Password,
        // password: '123456',
        // fcmToken: ftoken
      };
      console.log('param====>', param);
      axios
        .post(Environment.Login, param)
        .then(res => {
          console.log('data=======>', res.data.data);
          setVali(false);
          setloader(false);
          dispatch(login(res.data.data, res.data.data.token));
          navigation.replace('BottomNavigator');
        })
        .catch(error => {
          console.log('err rom login page========>', error?.response?.data);
          if (error?.response?.data?.responseCode == 401) {
            setloader(false);
            Alert.alert(error?.response?.data?.message);
          } else {
            setloader(false);
            Alert.alert('Something went wrong');
          }
        });
      // navigation.navigate('Home')
      // console.log('run')
    }
  };
  // useEffect(() => {
  //   getFcmToken()
  // }, [])

  return (
    <>
      <MyStatusBar backgroundColor={color.PRIMARY} />
      <SafeAreaView
        // start={{x: 0.0, y: 0.3}}
        // end={{x: 0.5, y: 1.0}}
        // locations={[0.1,0.8,0.1]}
        // colors={[color.BLUE,color.PRIMARY,color.BLUE]}
        // useAngle={true}
        // angle={45}
        // angleCenter={{x:0.8,y:0.8}}
        style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.contStyle}
          showsVerticalScrollIndicator={false}>
          <View style={styles.MainCon}>
            <View style={styles.LogoImg}>
              <Image
                source={images.LOGO_COLOR}
                resizeMode={'contain'}
                style={styles.img}
              />
            </View>

            <View style={styles.textCon1}>
              <Text style={styles.txt2}>Login in to your Account</Text>
            </View>
            <View style={styles.TextMainCon}>
              {/* {inputField('Password', true, 'password', Password, setPassword)} */}
              <View
                style={[
                  styles.TextFieldCon,
                  vali
                    ? {borderColor: color.red, borderWidth: 1}
                    : emailvali
                    ? {borderColor: color.red, borderWidth: 1}
                    : null,
                    Platform.OS=='ios'&&{paddingVertical:width*0.02}
                ]}>
                <View style={styles.TextFieldConImg}>
                  <Image
                    source={icons.person}
                    resizeMode={'contain'}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  placeholder={'Username'}
                  placeholderTextColor={color.TEXT_GRAY}
                  style={[styles.TextInp]}
                  keyboardType={'default'}
                  // secureTextEntry={secure}
                  onChangeText={e => {
                    setEmail(e);
                    // console.log(state)
                  }}
                  value={email}
                />
              </View>
              <View
                style={[
                  styles.TextFieldCon,
                  vali && {borderColor: color.red, borderWidth: 1},
                  passvali && {borderColor: color.red, borderWidth: 1},
                  Platform.OS=='ios'&&{paddingVertical:width*0.02}
                ]}>
                <View
                  style={[
                    styles.TextFieldConImg,
                    {
                      bottom: 0,
                      width: width * 0.055,
                      height: width * 0.055,
                    },
                  ]}>
                  <Image
                    source={icons.password}
                    resizeMode={'contain'}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  placeholder={'Password'}
                  placeholderTextColor={color.TEXT_GRAY}
                  style={[styles.TextInp, {width: '78%'}]}
                  keyboardType={'default'}
                  secureTextEntry={showPass}
                  onChangeText={e => {
                    setPassword(e);
                    // console.log(state)
                  }}
                  value={Password}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShowPass(!showPass);
                  }}
                  activeOpacity={0.7}
                  style={[
                    styles.TextFieldConImg,
                    {
                      bottom: 0,
                      width: width * 0.055,
                      height: width * 0.055,
                      marginRight: 3,
                    },
                  ]}>
                  <Image
                    source={icons.eye}
                    resizeMode={'contain'}
                    style={styles.img}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <View
                            // onPress={()=>navigation.navigate('ForgotPassword')} 
                            // onPress={()=>console.log('first')} 
                            style={styles.ForgotView}>
                            <Text
                                onPress={() => console.log('ForgotPassword')}
                                style={styles.ForgotViewText}>Forgot password?</Text>
                        </View> */}
            {/* {btn(()=>navigation.navigate('BottomNavigator'))} */}
            <TouchableOpacity
              onPress={() => {
                handleLogin();

                // console.log(detail)
              }}
              style={styles.bottomBtn}>
              <Text style={styles.bottomBtnText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.ForgotViewText1}>
              Don’t have an account?{' '}
              <Text
                style={styles.ForgotViewText2}
                onPress={
                  () => navigation.navigate('SignUp')
                  // console.log('first')
                }>
                Create account
              </Text>
            </Text>
          </View>

          <LinearGradient
            start={{x: 0.8, y: 0.5}}
            end={{x: 0.5, y: 0.5}}
            colors={['#009A4F1A', color.PRIMARY]}
            style={{
              height: 300,
              width: 300,
              position: 'absolute',
              top: -40,
              right: -50,
              // borderRadius:50
              transform: [{rotate: '-45deg'}],
              zIndex: -99,
            }}></LinearGradient>
          <LinearGradient
            start={{x: 0.8, y: 0.5}}
            end={{x: 0.5, y: 0.5}}
            colors={['#009A4F1A', color.PRIMARY]}
            style={{
              height: 300,
              width: 300,
              position: 'absolute',
              bottom: -30,
              left: -50,
              // borderRadius:50
              transform: [{rotate: '120deg'}],
              zIndex: -99,
            }}></LinearGradient>
        </ScrollView>
      </SafeAreaView>
      {/* {loader && <Loader />} */}
      <Modal visible={loader} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={color.BLUE} size={'large'} />
        </View>
      </Modal>
    </>
  );
};

export default Index;
