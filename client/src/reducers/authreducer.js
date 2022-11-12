import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  UPDATE_USER,
} from "../constants/actionTypes";
const initialState = {
  id: "",
  loginin: false,
  errors: null,
  fname: "",
  lname: "",
  phno: "",
  email: "",
  admin: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        id: action.payload.id,
        loginin: true,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phno: action.payload.phno,
        email: action.payload.email,
        errors: null,
        admin: action.payload.admin,
      };
    case SIGNUP:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        id: action.payload.id,
        loginin: true,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phno: action.payload.phno,
        email: action.payload.email,
        errors: null,
        admin: action.payload.admin,
      };
    case LOGOUT:
      console.log("huha");
      localStorage.removeItem("profile");
      return {
        ...state,
        id: "",
        loginin: false,
        fname: "",
        lname: "",
        phno: "",
        email: "",
        errors: null,
        admin: false,
      };
    case UPDATE_USER:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        id: action.payload.id,
        loginin: true,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phno: action.payload.phno,
        email: action.payload.email,
        errors: null,
        admin: action.payload.admin,
      };
    case ERROR:
      return { ...state, error: action.error };
    default:
      if (localStorage.getItem("profile") === null) return state;
      else
        return {
          ...state,
          id: JSON.parse(localStorage.getItem("profile")).id,
          loginin: true,
          fname: JSON.parse(localStorage.getItem("profile")).fname,
          lname: JSON.parse(localStorage.getItem("profile")).lname,
          phno: JSON.parse(localStorage.getItem("profile")).phno,
          email: JSON.parse(localStorage.getItem("profile")).email,
          errors: null,
          admin: JSON.parse(localStorage.getItem("profile")).admin,
        };
  }
}
