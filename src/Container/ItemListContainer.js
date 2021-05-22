import React from 'react'
import ItemList from '../Components/ItemList'
import { useParams } from "react-router-dom";

export default function ItemListContainer ({greeting}) {
    const { id } = useParams();

    return(
        <>
            <div className="ItemListContainer">  
                <p>{greeting}{id}</p>
            </div>
            <ItemList/>
        </>  
    )
}

