import React, { useState, useEffect } from 'react'
import Item from './Item'
import { useLoading, Audio } from '@agney/react-loading';

const ItemList = ({items}) => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
      });

    const [listItems, setListItems] = useState(()=>{return (<div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>)});

    const tareaAsyc = new Promise((resolve, reject)=>
        {
            setTimeout(()=> {
                return resolve(items)
            }, 3000);
        }
    ) 

    useEffect(()=>{
        tareaAsyc.then((res) =>{
            let itemId = 0
            setListItems( res.map((val) =>{
                itemId = itemId+1;  
                return(
                    <Item name={val.name} band={val.band} image={val.image} tipo={val.tipo} precio={val.precio} id={itemId} />
                )  
            })
            );
        },(rej)=>{
            console.log('paso algo->')
            console.log(rej)
        })
    },[])

    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    {listItems}
                </div>
            </div>
        </React.Fragment> 
        )
}

export default ItemList