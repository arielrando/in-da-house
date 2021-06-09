import React,{useState} from 'react'

const CartListData = ({handleButton,handleButtonVolver,handleUsuario,usuario}) => {

    const [errores,setErrores]= useState({email:{status:false,text:''}, name:{status:false,text:''}, phone:{status:false,text:''}});

    const handleChange = (event, name)=> {
        setErrores({...errores,[name]:{status:false,text:''}});
        handleUsuario({...usuario, [name]:event});
      }

    const handleChangeNumber = (event, name)=> {
        setErrores({...errores,[name]:{status:false,text:''}});
        const re = /^[0-9\b]+$/;
        if (event === '' || re.test(event)) {
            handleUsuario({...usuario, [name]:event});
        }
    }

    const verificaUsuario = ()=>{
        let continua = true;
        let errorEmail = {status:false,text:''};
        let errorName = {status:false,text:''};
        let errorPhone = {status:false,text:''};

        if(usuario.email.trim() === ""){
            errorEmail = {status:true,text:'complete este campo'};
            continua = false;
        }else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(usuario.email.trim())){
            errorEmail = {status:true,text:'ingrese un mail valido'};
            continua = false;
        }
        if(usuario.name.trim() === ""){
            errorName = {status:true,text:'complete este campo'};
            continua = false;
        }else if(!/^[a-zA-Z][a-zA-Z\s]*$/.test(usuario.name.trim())){
            errorName = {status:true,text:'solo ingrese letras y espacios'};
            continua = false;
        }
        if(usuario.phone.trim() === ""){
            errorPhone = {status:true,text:'complete este campo'};
            continua = false;
        }
        setErrores({email:errorEmail,name:errorName,phone:errorPhone });

        if(continua){
            handleButton();
        }
    }
    
    return(
        <React.Fragment>
            <>
            <div className="col-12" >
          
            <div class="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" value={`${usuario.email}`}  onChange={e => handleChange( e.target.value, 'email' )} aria-describedby="email" placeholder="Ingrese su email"/>
                {errores.email.status ? (<p className='mensajeError'>{errores.email.text}</p>):(<p className='mensajeError'>&nbsp;</p>)}
            </div>
            <div class="form-group">
                <label htmlFor="inputNombre">Nombre y Apellido</label>
                <input type="text" className="form-control" value={`${usuario.name}`} onChange={e => handleChange( e.target.value, 'name' )} id="inputNombre" placeholder="Ingrese su nombre y apellido" />
                {errores.name.status ? (<p className='mensajeError'>{errores.name.text}</p>):(<p className='mensajeError'>&nbsp;</p>)}
            </div>
            <div class="form-group">
                <label htmlFor="inputTelefono">Telefono</label>
                <input type="text" className="form-control" value={`${usuario.phone}`} onChange={e => handleChangeNumber( e.target.value, 'phone' )} id="inputTelefono" placeholder="Ingrese su numero de telefono" />
                {errores.phone.status ? (<p className='mensajeError'>{errores.phone.text}</p>):(<p className='mensajeError'>&nbsp;</p>)}
            </div>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-secondary" onClick={() => handleButtonVolver()}>Volver</button>
            </div>
            <div className="col-6" align="center">  
                <button  className="btn btn-success" onClick={() => verificaUsuario()}>Siguiente</button>
            </div>
            </>
                    
        </React.Fragment> 
        )
}

export default CartListData