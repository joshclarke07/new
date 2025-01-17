import React from 'react'
import { NavLink } from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css"

const CartButton = () => {
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className='fa fa-shopping-cart me-1'></span> Cart(0)
      </NavLink>

    </>
  )
}

export default CartButton
