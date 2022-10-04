import { FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UseAxios from "../../hooks/axios/UseAxios";
import { useUserContext } from "../../context/userContext";
import LoadingSpinner from "../../utils/LoadingSpinner";
const ProfileComponent = () => {
  const { userData } = useUserContext();
  const location = useLocation();
  const { data, isLoading } = UseAxios(`/users/${location.state?.id}`);



  return (
    <div className="Title MarginTop" style={{ color: "#fafafa" }}>
      Hello {userData.firstName}
      {!isLoading ? (
        <LoadingSpinner />
      ) : (
 
        <FormControl fullWidth>
          <TextField value={data?.user?.firstName || ""} color="success"/>
          <TextField value={data?.user?.lastName || ""} color="success"/>
          <TextField value={data?.user?.email || ""} color="success"/>
        </FormControl>
       
      )}
    </div>
  );
};

export default ProfileComponent;
