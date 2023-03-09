import {
    USER_LOGOUT,
    USER_LOGIN,
    PHONE_VERIFY,
  
  } from '../actionType';
  
  // init state
  const initState = {
    userData: {},
    isLogin: false,
    username: false,
    phone: false,
  };
  
  export default reducer = (state = initState, action) => {
    switch (action.type) {
      case USER_LOGOUT:
        return {
          ...state,
          isLogin: false,
          userData: {},
          token:''
        };
      case USER_LOGIN:
        return {
          ...state,
          isLogin: true,
          userData: action.userData,
          token: action.token,
        };
      case PHONE_VERIFY:
        return {
          ...state,
          phone: action.isPhoneoVerified,
        };
      default:
        return state;
    }
  };