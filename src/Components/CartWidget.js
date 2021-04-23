import React from 'react'
import carrito from '../Images/carrito.png';

const CartWidget = () => {
    return(
        <>
        <img className='imgCarrito' src={carrito} width="30" height="30"  alt="carrito"/>
        </>  
        )
    }

export default CartWidget