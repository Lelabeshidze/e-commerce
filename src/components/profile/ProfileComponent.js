import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../context/userContext';


const ProfileComponent = () => {

  const{userData} = useUserContext()
  return (

    <div> Hello {userData.firstName}</div>
  )
}

export default ProfileComponent