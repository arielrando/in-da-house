import React,{ useState} from 'react'
import '../App.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

const ItemDetail = ({id, name, band, image, tipo, precio, tracklist, spotifyId}) => {
  const [mostrarIrCarrito, setMostrarIrCarrito] = useState(false);

  return (
    <React.Fragment>
    <div className="row container-detail">
      <div className="col-md-4 mb-3 mb-md-0">
        <div id="mdb-lightbox-ui"></div>
        <div className="mdb-lightbox">
          <div className="row product-gallery mx-1">
            <div className="col-12 mb-0">
              <figure className="view overlay rounded z-depth-1 main-img">
              <img width="100%"  src={image} alt="album"/>
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
        <iframe title="spotifyFrame" src={`https://open.spotify.com/embed/album/${spotifyId}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <hr/>
        {mostrarIrCarrito ? (
          <Link to="/carrito">
            <button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" >Ir al carrito</button>
            </Link>
        ) : (<ItemCount idCd={id} quitarCount={setMostrarIrCarrito}/>)}
      </div>
    </div>  
    </React.Fragment>
  )
}

export default ItemDetail