import React, { useState, useEffect } from 'react'
import Item from './Item'
import { useParams } from "react-router-dom";
import { useLoading, Audio } from '@agney/react-loading';
import { getFirestore} from '../Libs/Firebase/Firebase';

const ItemList = () => {
    const { id } = useParams();
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });

    const db = getFirestore();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listItems, setListItems] = useState();

    useEffect(()=>{
        setLoading(true);

        const dbCollection = db.collection('items');
        const itemsCollection = id ? dbCollection.where("tipo","==",id) : dbCollection;

        itemsCollection.get()
            .then(prods =>{
                let itemsTemp = prods.docs.map(item =>({
                    id : item.id,
                    ...item.data()
                }))
                setItems(itemsTemp.sort(() => Math.random() - 0.5));
                setLoading(false);
            })
    },[id])

    useEffect(()=>{
        setListItems( items.map((val, idx) =>{
            return(
                <Item key={idx} id={val.id} name={val.name} band={val.band} image={val.image} tipo={val.tipo} precio={val.precio} path={'temp/'} />
            )  
        })
        );
        
    },[items])

    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                {loading ?(
                        <div className="col-12" align="center">Cargando <span {...containerProps}>{indicatorEl}</span></div>
                    ):(
                        <>
                        {listItems}
                        </>
                    )
                }
                </div>
            </div>
        </React.Fragment> 
        )
}

export default ItemList