import React,{useContext, useState,useEffect} from 'react'
import CartList from '../Components/CartList'

export default function CarritoContainer ({greeting}) {




    return(
        <>
            <div className="ItemListContainer">  
                <p>{greeting}</p>
            </div>
            <CartList />
        </>  
    )
}