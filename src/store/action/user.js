import {
    USER_LOGOUT,
    USER_LOGIN,
    // EMAIL_VERIFY,
    PHONE_VERIFY,
    // INTRO_DONE,
  } from '../actionType';
  
  export const logout = () => {
    return {
      type: USER_LOGOUT,
    };
  };
  
  export const login = (userData, token) => {
    return {
      type: USER_LOGIN,
      userData,
      token,
    };
  };
  
  // export const emailVerify = isEmailVerified => {
  //   return {
  //     type: EMAIL_VERIFY,
  //     isEmailVerified,
  //   };
  // };
  
  export const phoneVerify = isPhoneoVerified => {
    return {
      type: PHONE_VERIFY,
      isPhoneoVerified,
    };
  };
  
  // export const isIntro = isIntroDone => {
  //   return {
  //     type: INTRO_DONE,
  //     isIntroDone,
  //   };
  // };