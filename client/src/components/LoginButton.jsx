import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginButton = () => {
  return (
    <>
        <NavLink to="/login" className="btn btn-outline-primary ms-2">
        <span className='fa fa-sign-in  me-2'></span> Login
      </NavLink>
    </>
  )
}

export default LoginButton
