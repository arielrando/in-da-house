import React,{useContext, useState,useEffect} from 'react'
import CartList from '../Components/CartList'
import { CartContext } from '../Context/CartContext';

export default function CarritoContainer ({greeting}) {
    const {cart, removeItem, clear} = useContext(CartContext);
    const [items, setItems] = useState([]);

    const cd = [
        {id : 1, name : 'Toxicity', band: 'System of a down', image:'cat-0002.jpg', tipo:'CD', precio:'600'},
        {id : 2, name : 'Discovery', band: 'Daft Punk', image:'cat-0001.jpg', tipo:'Vinilo', precio:'25.000'},
        {id : 3, name : 'Future Nostalgia', band: 'Dua Lipa', image:'cat-0003.jpg', tipo:'Vinilo', precio:'7.500'}
    ];

    useEffect(()=>{
        let cdTemp = [];
        cart.map((val, idx) =>{
            if(cd.some(item => val.id === item.id)){
                let index = cd.findIndex(obj => obj.id === val.id);
                let objecto = cd[index];
                objecto.cantidad = val.cantidad;
                cdTemp.push(objecto);
            }
        })
        setItems(cdTemp);
    },[])

    useEffect(()=>{
        let cdTemp = [];
        cart.map((val, idx) =>{
            if(cd.some(item => val.id === item.id)){
                let index = cd.findIndex(obj => obj.id === val.id);
                let objecto = cd[index];
                objecto.cantidad = val.cantidad;
                cdTemp.push(objecto);
            }
        })
        setItems(cdTemp);
    },[cart])

    return(
        <>
            <div className="ItemListContainer">  
                <p>{greeting}</p>
            </div>
            <CartList items={items}/>
        </>  
    )
}