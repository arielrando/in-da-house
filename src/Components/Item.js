import React from 'react'

const Item = ({name, band, image, tipo, precio, id}) => {
  return (
    <React.Fragment>
        <div key={"itemKey"+id} className="col-4">
            <div className="card">
                <img className="card-img-top" src={'temp/'+image} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title"><a href="#" title="View Product"><b>{name}</b></a>({tipo})</h4>
                    <p className="card-text"> De <b>{band}</b></p>
                    <div className="row">
                        <div className="col-4">
                            <p className="btn btn-secondary btn-block">${precio}</p>
                        </div>
                        <div className="col-8">
                            <a href="#" className="btn btn-outline-secondary btn-block" >Agregar a favoritos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Item