import React from "react";
import "../Form.css";
import validate from "./validateInfo.js";
import useForm from "./useForm.js";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <h1>Let's play, Bug Busters!</h1>
      <h2>Create your account by filling out the information below.</h2>
      
      {/* First Name */}
      <div className="form-inputs">
        <label className="form-label">First Name</label>
        <input
          className="form-input"
          type="text"
          name="first_name"
          placeholder="Enter your first name"
          value={values.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <p>{errors.first_name}</p>}
      </div>

      {/* Last Name */}
      <div className="form-inputs">
        <label className="form-label">Last Name</label>
        <input
          className="form-input"
          type="text"
          name="last_name"
          placeholder="Enter your last name"
          value={values.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <p>{errors.last_name}</p>}
      </div>

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

      {/* Email */}
      {/* <div className="form-inputs">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div> */}

      {/* Passoword */}
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

      {/* Verify Password */}
      <div className="form-inputs">
        <label className="form-label">Confirm Password</label>
        <input
          className="form-input"
          type="password"
          name="password2"
          placeholder="Confirm your password"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <button className="form-input-btn" type="submit">
        Sign up
      </button>
      <span className="form-input-login">
        Already have an account? Login <a href="#">here</a>
      </span>
    </form>
  );
};

export default FormSignup;
