import React, { useState, useEffect,useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { useLoading, Audio } from '@agney/react-loading';

const CartList = ({items}) => {
    const {cart, removeItem, clear} = useContext(CartContext);
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });

    const [listItems, setListItems] = useState(()=>{return (<div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>)});
    const [mostrarLimpiar, setMostrarLimpiar] = useState(false);
    const tareaAsyc = new Promise((resolve, reject)=>
        {
            setTimeout(()=> {
                return resolve(items)
            }, 1000);
        }
    ) 

    useEffect(()=>{
        setMostrarLimpiar(false);
        setListItems(()=>{return (<div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>)});
        tareaAsyc.then((res) =>{
            if(cart.length > 0){
                setListItems( items.map((val, idx) =>{
                    return(
                        <li key={idx} >
                            <b>{val.name}</b> Cantidad: {val.cantidad} <button  className="btn btn-outline-secondary" onClick={() => removeItem(val.id)}>Quitar</button>
                        </li>
                    )  
                })
                );

                setMostrarLimpiar(true);
            }else{
                setListItems(()=>{return (<div className="col-12" align="center">No hay productos en el carrito</div>)});
            }
        },(rej)=>{
            console.log('paso algo->')
            console.log(rej)
        })
    },[items])

    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
            {mostrarLimpiar ? (
                <div className="ItemListContainer">  
                    <button  className="btn btn-outline-secondary" onClick={() => clear()}>Limpiar carrito</button>
                </div>
            ) : ('')
            }
        </React.Fragment> 
        )
}

export default CartList