import React from 'react'
import { Link } from "react-router-dom";

const Item = ({id, name, band, image, tipo, precio, path}) => {
  return (
    <React.Fragment>
        <div className="col-4">
            <div className="card">
            <Link to={`/item/${id}`}>
                <img className="card-img-top" src={path+image} alt="Card image cap"/>
                </Link>
                <div className="card-body">
                    <h4 className="card-title"><p title="View Product"><b>{name}</b></p>({tipo})</h4>
                    <p className="card-text"> De <b>{band}</b></p>
                    <div className="row">
                        <div className="col-4">
                            <p className="btn btn-secondary btn-block">${precio}</p>
                        </div>
                        <div className="col-8">
                            <button  className="btn btn-outline-secondary btn-block" >Agregar a favoritos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Item