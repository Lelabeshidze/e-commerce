import React from 'react'
import { useUserContext } from '../../context/userContext'

const header = () => {
    const {values} = useUserContext;
  return (
    <div>Hello {values.firstName}</div>
  )
}

export default header