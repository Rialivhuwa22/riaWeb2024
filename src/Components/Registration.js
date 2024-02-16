import React, { useState } from "react";
import { useFormik } from "formik";
import "../Style/Registration.css";

// Registration component
const Registration = () => {
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  // Define initial form values
  const initialValues = {
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Define validation function
  const validateForm = (values) => {
    const errors = {};

    // Validate First Name
    if (!values.firstName) {
      // If First Name is not provided, set an error message
      errors.firstName = "First Name is required";
    } else if (values.firstName.length > 15) {
      // If First Name exceeds 15 characters, set an error message
      errors.firstName = "First Name should not exceed 15 characters";
    }

    // Validate Surname
    if (!values.surname) {
      // If Surname is not provided, set an error message
      errors.surname = "Surname is required";
    } else if (values.surname.length > 20) {
      // If Surname exceeds 20 characters, set an error message
      errors.surname = "Surname should not exceed 20 characters";
    }

    // Validate Username
    if (!values.username) {
      // If Username is not provided, set an error message
      errors.username = "Username is required";
    }

    // Validate Email
    if (!values.email) {
      // If Email is not provided, set an error message
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      // If Email is not in a valid format, set an error message
      errors.email = "Invalid email address";
    }

    // Validate Password
    if (!values.password) {
      // If Password is not provided, set an error message
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        values.password
      )
    ) {
      // If Password does not meet the criteria, set an error message
      errors.password =
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
    }

    // Validate Confirm Password
    if (values.password !== values.confirmPassword) {
      // If Confirm Password does not match Password, set an error message
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  // Define form submission function
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission

    // Set the logged-in username in state
    setLoggedInUsername(values.username);

    // Redirect to the login page after successful registration
    window.location.href = "/login";

    // Reset form submission state
    setSubmitting(false);
  };

  // Use the useFormik hook
  const formik = useFormik({
    initialValues,
    validate: validateForm,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <h2>Registration</h2>
      <div className="register-description">
      <p>Please Register your account</p>
      </div>
    
      {/* Display welcome message after successful registration */}
      {loggedInUsername && (
        <div>
          <p>Welcome, {loggedInUsername}! Registration successful.</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={formik.handleSubmit}>
        {/* First Name field */}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
          {/* Display error message if there's an issue with First Name */}
        </div>

        {/* Surname field */}
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
          />
          {formik.errors.surname && <div>{formik.errors.surname}</div>}
          {/* Display error message if there's an issue with Surname */}
        </div>

        {/* Username field */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && <div>{formik.errors.username}</div>}
          {/* Display error message if there's an issue with Username */}
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <div>{formik.errors.email}</div>}
          {/* Display error message if there's an issue with Email */}
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && <div>{formik.errors.password}</div>}
          {/* Display error message if there's an issue with Password */}
        </div>

        {/* Confirm Password field */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && (
            <div>{formik.errors.confirmPassword}</div>
          )}
          {/* Display error message if there's an issue with Confirm Password */}
        </div>

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
