import { useForm, isRequired } from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import "../../App.css";
import { useUserContext } from "../../context/userContext";
import LoadingSpinner from "../../utils/LoadingSpinner";
import FileBase from "react-file-base64";
import { useProductContext } from "../../context/productContext";
export const ProductForm = (onSubmit) => {
  const initialState = { name: "", description: "", category:"", brand: "", price: "", image:"" };
  const [isLoading, setIsLoading] = useState(false);
  const [image,setImage] = useState("");
  const { addProduct } = useProductContext();
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = values.name;
    const description = values.description;
    const brand = values.brand;
    const price = values.price;
    const category = values.category;
    addProduct({ name, description, brand, price , category, image : image || ""});
    setIsLoading(true);
  };

  const validations = [
    ({ name }) =>
      isRequired(name) || {
        name: " Name must contain more than 3 symbols",
      },
    ({ description }) =>
      description.trim().length > 5 || {
        description: "Description must contain more than 10 symbols",
      },

    ({ brand }) =>
      isRequired(brand) || {
        brand: "Brand must contain more than 3 symbols",
      },
    ,
    ({ category }) =>
    isRequired(category) || {
      category: "Brand must contain more than 3 symbols",
    },
  ,
    ({ price }) =>
      price > 0 || {
        price: "Price should be positive number",
      },
  ];

  const { values, errors, isValid, changeHandler } = useForm(
    initialState,
    validations,
    onSubmit
  );

  return (
    <FormControl fullWidth>
      <h2>Add Category</h2>

      <TextField
        label="name"
        type="text"
        name="name"
        required
        value={values.name}
        onChange={changeHandler}
        error={!!values.name && !!errors.name}
        helperText={values.name && errors.name}
        margin="dense"
      />

      <TextField
        label="description"
        type="text"
        name="description"
        required
        value={values.description}
        onChange={changeHandler}
        error={!!values.description && !!errors.description}
        helperText={values.description && errors.description}
        margin="dense"
      />

<TextField
        label="category"
        type="text"
        name="category"
        required
        value={values.category}
        onChange={changeHandler}
        error={!!values.category && !!errors.category}
        helperText={values.category && errors.category}
        margin="dense"
      />
      <TextField
        label="brand"
        type="text"
        name="brand"
        required
        value={values.brand}
        onChange={changeHandler}
        error={!!values.brand && !!errors.brand}
        helperText={values.brand && errors.brand}
        margin="dense"
      />

      <TextField
        label="Price"
        type="number"
        name="price"
        required
        min="0"
        value={values.price}
        onChange={changeHandler}
        error={!!values.price && !!errors.price}
        helperText={values.price && errors.price}
        margin="dense"
      />
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setImage(base64)}
      />

      <Button disabled={!isValid} onClick={submitHandler}>
        Save
      </Button>
      {isLoading && <LoadingSpinner />}
    </FormControl>
  );
};
