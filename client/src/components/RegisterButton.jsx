import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisterButton = () => {
  return (
    <>
      <NavLink  to="/register" className="btn btn-outline-primary ms-2">
          <span className='fa fa-user-plus me-2'></span> Register
      </NavLink>
    </>
  )
}

export default RegisterButton
