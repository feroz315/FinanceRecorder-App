import {
    USER_LOGOUT,
    USER_LOGIN,
    EMAIL_VERIFY,
    PHONE_VERIFY,
    INTRO_DONE,
  } from '../actionType';
  
  // init state
  const initState = {
    userData: {},
    isLogin: false,
    email: false,
    phone: false,
    intro: -1,
  };
  
  export default reducer = (state = initState, action) => {
    switch (action.type) {
      case USER_LOGOUT:
        return {
          ...state,
          isLogin: false,
          userData: {},
          intro:0,
          token:''
        };
      case USER_LOGIN:
        return {
          ...state,
          isLogin: true,
          userData: action.userData,
          token: action.token,
          intro:1
        };
      case EMAIL_VERIFY:
        return {
          ...state,
          email: action.isEmailVerified,
        };
      case PHONE_VERIFY:
        return {
          ...state,
          phone: action.isPhoneoVerified,
        };
      case INTRO_DONE:
        return {
          ...state,
          intro: action.isIntroDone,
        };
      default:
        return state;
    }
  };