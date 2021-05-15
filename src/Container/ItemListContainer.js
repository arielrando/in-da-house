import React from 'react'
import ItemList from '../Components/ItemList'
import { useParams } from "react-router-dom";

export default function ItemListContainer ({greeting}) {
    const { id } = useParams();
    const cd = [
        {id : 1, name : 'Toxicity', band: 'System of a down', image:'cat-0002.jpg', tipo:'CD', precio:'600'},
        {id : 2, name : 'Discovery', band: 'Daft Punk', image:'cat-0001.jpg', tipo:'Vinilo', precio:'25.000'},
        {id : 3, name : 'Future Nostalgia', band: 'Dua Lipa', image:'cat-0003.jpg', tipo:'Vinilo', precio:'7.500'}
    ];

    return(
        <>
            <div className="ItemListContainer">  
                <p>{greeting}{id}</p>
            </div>
            <ItemList items={cd}  />
        </>  
    )
}

