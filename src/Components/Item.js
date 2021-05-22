import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const Item = ({id, name, band, image, tipo, precio, path}) => {

    const {addItemRapido, isInCart, removeItem} = useContext(CartContext);

    return (
        <React.Fragment>
            <div className="col-4">
                <div className="card">
                <Link to={`/item/${id}`}>
                    <img className="card-img-top" src={image} alt="album"/>
                    </Link>
                    <div className="card-body">
                        <h4 className="card-title"><p title="View Product"><b>{name}</b></p>({tipo})</h4>
                        <p className="card-text"> De <b>{band}</b></p>
                        <div className="row">
                            <div className="col-6">
                                <button  className="btn btn-outline-secondary btn-block" onClick={() => addItemRapido(id)}>Agregar</button>
                            </div>
                            {isInCart(id) ? (
                                <div className="col-6">
                                    <button  className="btn btn-outline-secondary btn-block" onClick={() => removeItem(id)}>Quitar</button>
                                </div>
                                ) : (<div className="col-6"></div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item