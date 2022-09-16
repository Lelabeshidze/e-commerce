import React from 'react'
import { useUserContext } from '../../context/userContext'
import { useForm } from '../../hooks/useForm';

const ProfileComponent = () => {
    const {values} = useForm();
    
  return (
    <div>Profile {values.firstName}</div>
  )
}

export default ProfileComponent