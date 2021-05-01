import React, { useState, useEffect } from 'react'
import Item from './Item'
import { useParams } from "react-router-dom";
import { useLoading, Audio } from '@agney/react-loading';

const ItemList = ({items}) => {
    const { id } = useParams();
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
        setListItems(()=>{return (<div className="col-12" align="center"><p>Cargando {indicatorEl}</p></div>)});
        tareaAsyc.then((res) =>{

        if(id){
            let cdTemp = [];
            items.map((val, idx) =>{
                 if(val.tipo === id){
                    cdTemp.push(val);
                 } 
            })
            setListItems( cdTemp.map((val, idx) =>{
                return(
                    <Item key={idx} id={val.id} name={val.name} band={val.band} image={val.image} tipo={val.tipo} precio={val.precio} path={'../temp/'} />
                )  
            })
            );
        }else{
            setListItems( items.map((val, idx) =>{
                return(
                    <Item key={idx} id={val.id} name={val.name} band={val.band} image={val.image} tipo={val.tipo} precio={val.precio} path={'temp/'} />
                )  
            })
            );
        }
    },(rej)=>{
        console.log('paso algo->')
        console.log(rej)
    })
    },[id])

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