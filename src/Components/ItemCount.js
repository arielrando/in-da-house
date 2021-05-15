import React,{useState, useContext} from 'react'
import { CartContext } from '../Context/CartContext';

const ItemCount = ({idCd,quitarCount}) => {
    const {addItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const valorSumar = () => {
      if(cantidad<10){
        setCantidad(cantidad+1);
      }
    }

    const valorRestar = () => {
      if(cantidad>1){
        setCantidad(cantidad-1);
      }
    }

    const onAdd = (cant) =>{
      addItem(idCd,cant);
      quitarCount(true);
    }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3 mb-3 mb-md-0">
          <div className="input-group">
            <span className="input-group-btn">
                <button type="button" className="btn btn-outline-secondary btn-number" onClick={valorRestar}>-</button>
            </span>
            <input type="text" name="quant" className="form-control input-number" value={cantidad} min="1" max="10" readOnly/>
            <span className="input-group-btn">
                <button type="button" className="btn btn-outline-secondary btn-number" onClick={valorSumar} >+</button>
            </span>
          </div>
        </div>
        <div className="col-md-9 mb-9 mb-md-0">
          <button type="button" className="btn btn-outline-secondary btn-md mr-1 mb-2" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
      </div>    
    </React.Fragment>
  )
}

export default ItemCount