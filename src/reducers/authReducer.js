import produce from "immer";
import * as types from "../actionTypes/authActionTypes";

const initialState = {
  isLoggedIn: false,
  signUpErrors: [],
  countries: [],
  photographers: [],
  signUpEmail: "",
  resetPasswordUsername: "",
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_INIT:
        draft.isLoggedIn = false;
        return;
      case types.LOGIN_SUCCESS:
        draft.isLoggedIn = true;
        return;
      case types.LOGIN_FAILURE:
        draft.isLoggedIn = false;
        return;

      case types.LOGOUT_INIT:
        draft.isLoggedIn = false;
        return;
      case types.LOGOUT_DONE:
        draft.isLoggedIn = false;
        return;

      case types.GET_COUNTRIES_SUCCESS:
        draft.countries = action.countries;
        return;
      case types.GET_PHOTOGRAPHERS_SUCCESS:
        draft.photographers = action.photographers;
        return;
      case types.SIGNUP_INIT:
        draft.signUpErrors = [];
        return;
      case types.SIGNUP_SUCCESS:
        draft.signUpEmail = action.email;
        return;
      case types.SIGNUP_FAILURE:
        return;

      case types.FORGET_PASSWORD_SEND_CODE_INIT:
        return;
      case types.FORGET_PASSWORD_SEND_CODE_SUCCESS:
        draft.resetPasswordUsername = action.username;
        return;

      default:
        return;
    }
  });

export default authReducer;
