import React, {useEffect,useState } from 'react';

const CartListDetails = ({handleButton,handleButtonVolver,items,usuario,total, imagenes}) => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(()=>{
        setItemsList( items.map((val, idx) =>{
            return(
                <tr key={idx}> 
                    <td><img src={imagenes[val.id]} alt={`imagen_${val.name}`} width="40" height="40"/> {val.name}</td>
                    <td>{val.cantidad}</td>
                    <td>${val.cantidad*val.precio}</td>
                </tr>
            )  
        })
        );
    },[])
    

    return(
        <React.Fragment>
            <>
            <div className="col-12" >
            <table className="carritoTabla">
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>
            {itemsList}
            <tr>
                <td colspan="2" ><strong>Total</strong></td>
                <td><strong>${total}</strong></td>
            </tr>
            
            </table>
            <br/>
          
            <div class="form-group">
                <strong>Email: </strong><span>{usuario.email}</span>
            </div>
            <div class="form-group">
                <strong>Nombre y Apellido: </strong><span>{usuario.name}</span>
            </div>
            <div class="form-group">
                <strong>Telefono: </strong><span>{usuario.phone}</span>
            </div>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-secondary" onClick={() => handleButtonVolver()}>Volver</button>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-success" onClick={() => handleButton()}>Finalizar</button>
            </div>
            </>
                    
        </React.Fragment> 
        )
}

export default CartListDetails