import { useForm, isRequired } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import { Form } from "react-router-dom";
export const RegisterForm = (onSubmit) => {
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
  const validations = [
    ({ firstName }) =>
      isRequired(firstName) || {
        firstName:
          "First name is required and  must contain more than 3 symbols",
      },
    ({ lastName }) =>
      isRequired(lastName) || {
        lastName: "Last name is required and must contain more than 3 symbols",
      },
    ({ email }) =>
      isRequired(email) || {
        email: "Last name is required and must contain more than 3 symbols",
      },
    ({ password }) =>
      isRequired(password) || {
        password: "Password is required and must contain more than 3 symbols",
      },
  ];

  const { values, errors, isValid, touched, changeHandler, submitHandler } =
    useForm(initialState, validations, onSubmit);

  return (
    <FormControl className="signup-form" onSubmit={submitHandler}>
      <h2>Sign up</h2>
      <div>
        <TextField
          label="Firstname"
          variant="standard"
          type="text"
          name="firstName"
          required
          value={values.firstName}
          onChange={changeHandler}
          error={!!errors.firstName}
          helperText={values.firstName.errors}
        />
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <TextField
          label="Lastname"
          variant="standard"
          type="text"
          name="lastName"
          required
          value={values.lastName}
          onChange={changeHandler}
          error={!!errors.lastName}
          helperText={values.lastName.errors}
        />
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <TextField
          label="Email"
          variant="standard"
          type="email"
          name="email"
          required
          value={values.email}
          onChange={changeHandler}
          error={!!errors.email}
          helperText={values.email.errors}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          required
          value={values.password}
          onChange={changeHandler}
          error={!!errors.password}
          helperText={values.password.errors}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <Button variant="outlined" disabled={!isValid}>
        Sign Up
      </Button>
    </FormControl>
  );
};
