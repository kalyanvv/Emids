import React, { useState } from "react";
import signupStyles from "./signup.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/authactions";
import { Link } from "react-router-dom";
export default function SignupCopy() {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2: "",
    phno: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ ...form, password: form.password1 }, navigate));
  };

  return (
    <div id={signupStyles.signup}>
      <form action="" id={signupStyles.form} onSubmit={handleSubmit}>
        <div id={signupStyles.imgholder}>
          <img src="./images/ezgif.com-gif-maker.gif" alt="" />
          <div id={signupStyles.eyeband}></div>
        </div>
        <h2 id={signupStyles.heading}>For Users</h2>
        <div id={signupStyles.cont}>
          <input
            type="text"
            id={signupStyles.fname}
            placeholder="Name"
            name="fname"
            onChange={handleChange}
            required
          />
          <br />
          <br />
         <input
            type="text"
            id={signupStyles.lname}
            placeholder="User Name"
            name="lname"
            onChange={handleChange}
            required
          /> 
          
          <br />
          <br />

          <div className={signupStyles["password-layout"]}>
            <input
              type={!showPassword ? "password" : "text"}
              // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              id={signupStyles.pass}
              placeholder="Password"
              name="password1"
              onChange={handleChange}
              required
            />
            <i
              className={`fa-solid ${
                !showPassword ? "fa-eye-slash" : "fa-eye"
              }`}
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              id={signupStyles.passicon}
            ></i>
          </div>
          <br />

          <div className={signupStyles["password-layout"]}>
            <input
              type={!showRePassword ? "password" : "text"}
              id={signupStyles.repass}
              placeholder="Confirm Password"
              name="password2"
              onChange={handleChange}
              required
            />
            <i
              className={`fa-solid ${
                !showRePassword ? "fa-eye-slash" : "fa-eye"
              }`}
              onClick={() => {
                setShowRePassword((prev) => !prev);
              }}
              id={signupStyles.repassicon}
            ></i>
          </div>
          <span id={signupStyles.passcheck}>{/* <%= passcheck %> */}</span>
          <br />
          <br />
          <button type="submit" id={signupStyles.submit}>
            Submit
          </button>
          <br />
          <br />
          <span id={signupStyles.errortext}>{/* <%= error %> */}</span>
          <br />
          <span>Already have an Account? </span>
          <Link to="/logincopy">Log In</Link>
        </div>
      </form>
    </div>
  );
}
