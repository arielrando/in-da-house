import React, { useState, useEffect,useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import  CartListItems from './CartListItems';
import  CartListData from './CartListData';
import  CartListDetails from './CartListDetails';
import { useLoading, Audio } from '@agney/react-loading';
import { getFirestore} from '../Libs/Firebase/Firebase';
import firebase from 'firebase/app';
import { Link } from "react-router-dom";

const CartList = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });
    const db = getFirestore();
    const dbOrders = db.collection('orders');

    const [estado,setEstado] = useState('');
    const [listItems, setListItems] = useState(()=>{return (<div className="col-12" align="center"><p >Cargando <span {...containerProps}>{indicatorEl}</span></p></div>)});
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState([]);
    const [idOrder, setIdOrder] = useState(0);
    const [imagenes, setImagenes] = useState([]);
    const [banderaLoding, setBanderaLoding] = useState(false);
    const [usuario, setUsuario] = useState({name:"",phone:"",email:""});
    const tareaAsyc = new Promise((resolve, reject)=>
        {
            let cdTemp = [];
            let imagesTemp = [];
            const dbCollection = db.collection('items');
            let promesa = cart.map(async (val, idx) =>{
                const itemCollection = dbCollection.doc(val.id);
                const numFruit = await itemCollection.get()
                    .then(prod =>{
                        imagesTemp[prod.id]=prod.data().image;
                        cdTemp.push({
                            id : prod.id,
                            cantidad:val.cantidad,
                            name:prod.data().name,
                            precio:prod.data().precio
                        })
                    })
                    
                    return numFruit;
            });
        Promise.all(promesa).then(() => { return resolve({"cd":cdTemp,"imagenes":imagesTemp});});
        }
    ) 

    useEffect(()=>{
        if(cart.length>0){
            setEstado('loading');
            let totalTemp =  0
            tareaAsyc.then((res) =>{
                setBanderaLoding(true);
                setItems(res.cd);
                setImagenes(res.imagenes);
                setListItems( res.cd.map((val, idx) =>{
                    totalTemp =  totalTemp+val.cantidad*val.precio;
                    return(
                        <tr key={idx}>
                            <td><img src={res.imagenes[val.id]} alt={`imagen_${val.name}`} width="40" height="40"/> {val.name}</td>
                            <td>{val.cantidad}</td>
                            <td>${val.cantidad*val.precio}</td>
                            <td><button  className="btn btn-outline-secondary" onClick={() => removeItem(val.id)}>Quitar</button></td>
                        </tr>
                    )  
                })
                );
                setTotal(totalTemp);
            },(rej)=>{
                console.log('paso algo->')
                console.log(rej)
            })
        }else{
            setEstado('sinItems');
        }
    },[cart])

    useEffect(()=>{
        if(banderaLoding){
            if(listItems.length>0){
                setEstado('items')
            }else{
                setEstado('sinItems');
            }
        }
    },[listItems])

    const pasaAdatosUsuario = () => {
        setEstado('usuario');
    }

    const pasaAitems = () => {
        setEstado('items');
    }

    const pasaAdetalles = () => {
        setEstado('detalles');
    }

    const createOrder = () => {
        setOrder({
            buyer : usuario,
            items : items,
            total : total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        });
        clear();
    }

    useEffect(()=>{
        if(order.items){
            setEstado('loading');
            dbOrders.add(order)
                .then((id)=>{
                    setIdOrder(id.id);
                    setEstado('compraFinalizada');
                    setOrder([]);
                })
                .catch((err)=>{
                    console.log("error: ",err);
                    setEstado('errorCompra');
                })
        }
    },[order])

    

    const estadoSwitch = (estado) => {
        switch(estado) {
            case 'loading':
                return (
                    <div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>
                );
            case 'compraFinalizada':
                return (
                    <>
                    <div className="col-12" align="center">Compra finalizada, su ID de pedido es: {idOrder}</div>
                    <div className="col-12" align="center"><Link to="/"><button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" >Volver al inicio</button></Link></div>
                    </>
                );
            case 'sinItems':
                return (
                    <>
                    <div className="col-12" align="center">No hay productos en el carrito</div>
                    <div className="col-12" align="center"><Link to="/"><button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" >Volver al inicio</button></Link></div>
                    </>
                );
            case 'items':
                return (
                    <CartListItems listItems={listItems} handleButton={pasaAdatosUsuario} total={total}/>
                );
            case 'usuario':
                return (
                    <CartListData  handleButton={pasaAdetalles} handleButtonVolver={pasaAitems} handleUsuario={setUsuario} usuario={usuario}/>
                );
            case 'detalles':
                return (
                    <CartListDetails  handleButton={createOrder} handleButtonVolver={pasaAdatosUsuario} items={items} usuario={usuario} total={total} imagenes={imagenes}/>
                );
            case 'errorCompra':
                return (
                    <>
                    <div className="col-12" align="center">Ocurrio un error al tratar de crear su pedido, vuelva a intentarlo</div>
                    <div className="col-12" align="center"><Link to="/"><button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" >Volver al inicio</button></Link></div>
                    </>
                );
            default:
                return (
                    <>
                    <div className="col-12" align="center">agregue productos al carrito!</div>
                    <div className="col-12" align="center"><Link to="/"><button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" >Volver al inicio</button></Link></div>
                    </>
                );
        }
      }

    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    {estadoSwitch(estado)}
                </div>
            </div>
        </React.Fragment> 
        )
}

export default CartList