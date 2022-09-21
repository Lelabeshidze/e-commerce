import { useForm, isRequired } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import "../../App.css";
import { useUserContext } from "../../context/userContext";
import LoadingSpinner from "../../utils/LoadingSpinner";

export const LoginForm = (onSubmit) => {
  const initialState = { email: "", password: "" };
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUserContext();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = values.email;
    const password = values.password;
    login({ email, password });
    setIsLoading(true);
  };

  const validations = [
    ({ email }) =>
      (isRequired(email) && email.includes("@gmail.com")) || {
        email: "Email is not  valid",
      },
    ({ password }) =>
      isRequired(password) || {
        password: "Password must contain more than 3 symbols",
      },
  ];
  const { values, errors, isValid, touched, changeHandler } = useForm(
    initialState,
    validations,
    onSubmit
  );

  return (
    <FormControl className="signup-form">
      <h2>Sign in</h2>
      <div>
        <TextField
          label="Email"
          variant="standard"
          type="email"
          name="email"
          required
          value={values.email}
          onChange={changeHandler}
          error={!!values.email && !!errors.email}
          helperText={values.email && errors.email}
        />
        {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
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
          error={!!values.password && !!errors.password}
          helperText={values.password && errors.password}
        />
        {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
      </div>

      <Button disabled={!isValid} onClick={submitHandler}>
        Sign In
      </Button>
      {isLoading && <LoadingSpinner />}
    </FormControl>
  );
};
