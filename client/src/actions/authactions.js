import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  UPDATE_USER,
} from "../constants/actionTypes";
import { Users, LogOut, RegisterUser, UpdateUser } from "../api/index";

export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await Users(formData);
    const chk = data.filter(
      (ele) =>
        ele.email === formData.email && ele.password === formData.password
    );
    if (chk.length > 0 && chk[0].allow)
      dispatch({ type: LOGIN, payload: chk[0] });
    else throw "unable to login";

    router("/home");
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await Users(formData);
    const chk = data.filter((ele) => ele.email === formData.email);
    if (chk.length !== 0) throw "User already Exists";
    const { data: newuser } = await RegisterUser({
      ...formData,
      allow: true,
      admin: false,
    });
    dispatch({ type: SIGNUP, payload: newuser });

    router("/home");
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const logout = (router) => (dispatch) => {
  try {
    dispatch({ type: LOGOUT, payload: "" });
    router("/login");
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const updateuser = (data, changes) => async (dispatch) => {
  try {
    const { data: updateddata } = await UpdateUser(data.id, data, changes);
    dispatch({ type: UPDATE_USER, payload: updateddata });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};
