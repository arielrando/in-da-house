import React,{Component, useState, useEffect} from 'react'
import ItemList from '../Components/ItemList'

export default function ItemListContainer ({greeting}) {

    const cd = [
        {name : 'Toxicity', band: 'System of a down', image:'cat-0002.jpg', tipo:'CD', precio:'600'},
        {name : 'Discovery', band: 'Daft Punk', image:'cat-0001.jpg', tipo:'Vinilo', precio:'25.000'},
        {name : 'Future Nostalgia', band: 'Dua Lipa', image:'cat-0003.jpg', tipo:'Vinilo', precio:'7.500'}
    ];

    return(
        <>
            <div className="ItemListContainer">  
                <p>{greeting}</p>
            </div>
            <ItemList items={cd} />
        </>  
    )
}

