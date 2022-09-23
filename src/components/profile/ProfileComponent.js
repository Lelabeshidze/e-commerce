import { FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import UseAxios from '../../hooks/axios/UseAxios';
import { useUserContext } from '../../context/userContext';


const ProfileComponent = () => {

  const{userData} = useUserContext();
  const location = useLocation();
 const { data } = UseAxios(`/users/${location.state?.id}`);

 
  return (

    <div className='Title MarginTop'> Hello {userData.firstName} 
    <FormControl fullWidth>
      <TextField value={data?.user?.firstName || ''}/>
      <TextField value={data?.user?.lastName || ''}/>
      <TextField value={data?.user?.email || ''}/>
    </FormControl>
    </div>
  )
}

export default ProfileComponent