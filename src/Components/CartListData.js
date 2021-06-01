import React, {useContext,useEffect } from 'react'
import { CartContext } from '../Context/CartContext';

const CartListData = ({handleButton,handleButtonVolver,handleUsuario,usuario}) => {
    const {clear} = useContext(CartContext);

    const handleChange = (event, name)=> {
      handleUsuario({...usuario, [name]:event});
      }

    const handleChangeNumber = (event, name)=> {
        const re = /^[0-9\b]+$/;
        if (event === '' || re.test(event)) {
            handleUsuario({...usuario, [name]:event});
        }
    }

    return(
        <React.Fragment>
            <>
            <div className="col-12" >
          
            <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" value={`${usuario.email}`}  onChange={e => handleChange( e.target.value, 'email' )} aria-describedby="email" placeholder="Ingrese su email"/>
            </div>
            <div class="form-group">
                <label for="inputNombre">Nombre y Apellido</label>
                <input type="text" class="form-control" value={`${usuario.name}`} onChange={e => handleChange( e.target.value, 'name' )} id="inputNombre" placeholder="Ingrese su nombre y apellido" />
            </div>
            <div class="form-group">
                <label for="inputTelefono">Telefono</label>
                <input type="text" class="form-control" value={`${usuario.phone}`} onChange={e => handleChangeNumber( e.target.value, 'phone' )} id="inputTelefono" placeholder="Ingrese su numero de telefono" />
            </div>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-secondary" onClick={() => handleButtonVolver()}>Volver</button>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-success" onClick={() => handleButton()}>Siguiente</button>
            </div>
            </>
                    
        </React.Fragment> 
        )
}

export default CartListData