import React from "react";
import "../Form.css";
import validate from "./validateInfo.js";
import useForm from "./useForm.js";
import { useNavigate } from "react-router-dom";
import ProfilePage from "./Profile.js"

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  
  const navigate = useNavigate();

  const submitHandler = () =>{
    return <ProfilePage />
  }

  return (
    <form onSubmit={submitHandler} className="form" noValidate>
      <h1>Let's play, Bug Busters!</h1>
      
      {/* Username */}
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      {/* Password */}
      <div className="form-inputs">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      
      <button className="form-input-btn" type="button">
        Login
      </button>
    </form>
  );
};

export default FormLogin;