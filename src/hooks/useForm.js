import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext, register } from "../context/userContext";
import { instance } from "../hooks/instance";
function validate(validations, values) {
  const errors = validations
    .map((validation) => validation(values))
    .filter((validation) => typeof validation === "object");
  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
  };
}

export function useForm(
  initialState = {},
  validations = [],
  onSubmit = () => {}
) {
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialIsValid);
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeHandler = ({ target: { value, name } }) => {
    const newValues = { ...values, [name]: value };
    const { isValid, errors } = validate(validations, newValues);
    setValues(newValues);
    setErrors(errors);
    setValid(isValid);
    setTouched({ ...touched, [name]: true });
  };

  // const  {register} = useUserContext;
  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   // try {
  //   //   const { data } = await instance.post(
  //   //     "/users/register/",
  //   //     values
  //   //     // JSON.stringify({ values }),
  //   //     // {
  //   //     //   headers: { "Content-Type": "application/json" },
  //   //     //   withCredentials: true,
  //   //     // }
  //   //   );
  //   //   localStorage.setItem("token", data.token);
  //   //   localStorage.setItem("refresh_token", data.refreshToken);
  //   //   setLoading(true);
  //   //   navigate("/profile");
  //   //   setValues(data.user);
  //   // } catch (err) {
  //   //   setErrors("Registration Failed");
  //   // }
  //   const firstName = values.firstName;
  //   const lastname = values.lastname;
  //   const email = values.email;
  //   const password = values.password;
  //   register({ firstName, lastname, email, password });
  // };

  return { values, errors, touched, isValid, changeHandler,setErrors,setLoading };
}

export function isRequired(value) {
  return value != null && value.trim().length > 3;
}
