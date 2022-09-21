import { useForm, isRequired } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import "../../App.css";
import { useUserContext } from "../../context/userContext";
import LoadingSpinner from "../../utils/LoadingSpinner";

export const RegisterForm = (onSubmit) => {
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
const[isLoading,setIsLoading] = useState(false)
  const  {register} = useUserContext();
  const submitHandler = async (e) => {
    e.preventDefault();
    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const password = values.password;
    register({ firstName, lastName, email, password });
    setIsLoading(true)
  };
  
  const validations = [
    ({ firstName }) =>
      isRequired(firstName) || {
        firstName:
          "First Name must contain more than 3 symbols",
      },
    ({ lastName }) =>
      isRequired(lastName) || {
        lastName: "Last Name  must contain more than 3 symbols",
      },

    ({ email }) =>
      (isRequired(email) && email.includes("@gmail.com")) || {
        email: "email is not valid",
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
          error={!!values.firstName && !!errors.firstName}
          helperText={values.firstName && errors.firstName}
        />
        {/* {touched.firstName && errors.firstName && <p>{errors.firstName}</p>} */}
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
          error={!!values.lastName && !!errors.lastName}
          helperText={values.lastName && errors.lastName}
        />
        {/* {touched.lastName && errors.lastName && <p>{errors.lastName}</p>} */}
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
      
      <Button disabled={!isValid} onClick={ submitHandler}>
        Sign Up
      </Button>
      {isLoading && <LoadingSpinner /> }
    </FormControl>
    
  );
};
