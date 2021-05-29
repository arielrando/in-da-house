import React,{ useState, useEffect} from 'react'
import ItemDetail from '../Components/ItemDetail'
import { useParams} from "react-router-dom";
import { useLoading, Audio } from '@agney/react-loading';
import { getFirestore} from '../Libs/Firebase/Firebase';

export default function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const db = getFirestore();

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });
      

    useEffect(()=>{
        const dbCollection = db.collection('items');
        const itemCollection = dbCollection.doc(id);

        itemCollection.get()
            .then(prod =>{
                setItem({
                    id : prod.id,
                    ...prod.data()
                })
            })
    },[id])
    
    return(
        <>
            <div className="ItemDetailContainer">  
            {Object.keys(item).length==0 ? (
                <div className="col-12" align="center">Cargando <span {...containerProps}>{indicatorEl}</span></div>
            ) : (
                <ItemDetail id={item.id} name={item.name} band={item.band} image={item.imageProduct} tipo={item.tipo} precio={item.precio} tracklist={item.tracklist} spotifyId={item.spotifyId} />
            )}
            </div>
            
        </>  
    )
}
