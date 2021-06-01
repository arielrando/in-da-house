import React, {useContext } from 'react'
import { CartContext } from '../Context/CartContext';

const CartListItems = ({listItems, handleButton, total}) => {
    const {clear} = useContext(CartContext);

    return(
        <React.Fragment>
            <>
            <div className="col-12" >
            <table className="carritoTabla">
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
            </tr>
            {listItems}
            <tr>
                <td colspan="2" ><strong>Total</strong></td>
                <td><strong>${total}</strong></td>
            </tr>
            
            </table>
            
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-secondary" onClick={() => clear()}>Limpiar carrito</button>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-success" onClick={() => handleButton()}>Siguiente</button>
            </div>
            </>
                    
        </React.Fragment> 
        )
}

export default CartListItems