import React,{useState,useEffect,useContext} from 'react'
import carrito from '../Images/carrito.png';
import { CartContext } from '../Context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        if(cart && cart.length > 0){
            cart.map((val, idx) =>{
                newTotal += val.cantidad;
           })
        }
       setCartTotal(newTotal);
    }, [cart]);
    
    return(
        <>
            <Link to="/carrito"><img className='imgCarrito' src={carrito} width="30" height="30"  alt="carrito"/></Link>
            {cartTotal>0?(<span>{cartTotal}</span>):("")}
        </>  
        )
    }

export default CartWidget