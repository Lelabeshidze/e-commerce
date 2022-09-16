import {useState,useEffect} from 'react';
import {instance} from '../hooks/instance'
function validate(validations, values) {
    const errors = validations
      .map(validation => validation(values))
      .filter(validation => typeof validation === 'object');
    return {isValid: errors.length === 0, errors: errors.reduce((errors, error) => ({...errors, ...error}), {})};
  }
  
  export function useForm(initialState = {}, validations = [], onSubmit = () => {}) {
    const {isValid: initialIsValid, errors: initialErrors} = validate(validations, initialState);
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setValid] = useState(initialIsValid);
    const [touched, setTouched] = useState({});
    const [loading,setLoading] = useState(false)
  
    const changeHandler = ({target: {value, name}}) => {
      const newValues = {...values, [name]: value};
      const {isValid, errors} = validate(validations, newValues);
      setValues(newValues);
      setErrors(errors);
      setValid(isValid);
      setTouched({...touched, [name]: true});
    };
  
    // const submitHandler = async (event) => {
    //   event.preventDefault();
    //   setValues({firstName: '', lastName: '', email: '',password:''})
 
    //     const { data } = await instance.post("/users/register/", values);
    //     console.log(data)
    
    // };
    const submitHandler = async (e) => {
      e.preventDefault();
 
      try {
        const response = await instance.post(
          "/users/register/", values,
          JSON.stringify({ values}),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
          
        );
        console.log(response)
        setLoading(true);
       
        setValues({firstName: '', lastName: '', email: '',password:''})
      
      } catch (err) {
        if (!err?.response) {
          setErrors("No Server Response");
        }  else {
          setErrors("Registration Failed");
        }
       
      }
    };



    return {values, errors, touched, isValid, changeHandler, submitHandler};
  }
  
  export function isRequired(value) {
    return value != null && value.trim().length > 3 
  }