import React, { useState, useEffect,useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { useLoading, Audio } from '@agney/react-loading';
import { getFirestore} from '../Libs/Firebase/Firebase';
import { Link } from "react-router-dom";

const CartList = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });
    const db = getFirestore();

    const [listItems, setListItems] = useState(()=>{return (<div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>)});
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const tareaAsyc = new Promise((resolve, reject)=>
        {
            let cdTemp = [];
            const dbCollection = db.collection('items');
            let promesa   =  cart.map(async (val, idx) =>{
                const itemCollection = dbCollection.doc(val.id);
                const numFruit = await itemCollection.get()
                    .then(prod =>{
                        cdTemp.push({
                            id : prod.id,
                            cantidad:val.cantidad,
                            ...prod.data()
                        })
                    })

                    return numFruit;
            
        });
        
        Promise.all(promesa).then(() => {return resolve(cdTemp);});
        }
    ) 

    useEffect(()=>{
        setLoading(true);
        let totalTemp =  0
        tareaAsyc.then((res) =>{
                setListItems( res.map((val, idx) =>{
                    totalTemp =  totalTemp+val.cantidad*val.precio;
                    return(
                        <li key={idx} >
                            <b>{val.name}</b> Cantidad: {val.cantidad} Subtotal:  ${val.cantidad*val.precio}  <button  className="btn btn-outline-secondary" onClick={() => removeItem(val.id)}>Quitar</button>
                        </li>
                    )  
                })
                );
            setTotal(totalTemp);
            setLoading(false);
        },(rej)=>{
            console.log('paso algo->')
            console.log(rej)
        })
    },[cart])

    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    {loading ?(
                            <div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>
                        ):(
                            listItems.length>0 ?(
                                <>
                                <div className="col-12" >
                                <ul>
                                {listItems}
                                <li key="total" >Total: ${total}</li>
                                </ul>
                                
                                </div>
                                <div className="col-12" align="center">  
                                    <button  className="btn btn-outline-secondary" onClick={() => clear()}>Limpiar carrito</button>
                                </div>
                                </>
                            ):(
                                <>
                                <div className="col-12" align="center">No hay productos en el carrito</div>
                                <div className="col-12" align="center"><Link to="/"><button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" >Volver al inicio</button></Link></div>
                                </>
                            )
                            
                        )
                    }
                    
                </div>
            </div>
        </React.Fragment> 
        )
}

export default CartList