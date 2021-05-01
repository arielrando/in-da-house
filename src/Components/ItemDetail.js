import React,{useEffect, useState} from 'react'
import '../App.css';

const ItemDetail = ({id, name, band, image, tipo, precio, tracklist}) => {
    const [tracklistText, setTracklistText] = useState(); 
    useEffect(()=>{
        setTracklistText( tracklist.map((val, idx) =>{
            return(
                <li key={idx} >{idx+1}   {val}</li>)  
        })
        );
    },[])
    

  return (
    <React.Fragment>

  <div className="row container-detail">
    <div className="col-md-4 mb-3 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div className="mdb-lightbox">

        <div className="row product-gallery mx-1">

          <div className="col-12 mb-0">
            <figure className="view overlay rounded z-depth-1 main-img">
            <img width="100%"  src={'../temp/'+image} alt="Card image cap"/>
            </figure>
          </div>
        </div>

      </div>

    </div>
    <div className="col-md-6 mb-6">

      <h1>{name}</h1>
      <h5>{tipo}</h5>
      <p className="mb-2 text-muted text-uppercase small">{band}</p>
      <p><span className="mr-1"><strong>${precio}</strong></span></p>
      <ul>
          {tracklistText}
      </ul>
      <hr/>
      <button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2">Agregar al carrito</button>
      <button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2">Guardar en favoritos</button>
    </div>
  </div>



            
    </React.Fragment>
  )
}

export default ItemDetail