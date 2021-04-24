import React,{useEffect,useState} from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [stock, setStock] = useState(0);


  const agregarItems = () => {
    setStock(stock+1);
  }

  const quitarItems = () => {
    if(stock>0){
      setStock(stock-1);
    }
  }

  useEffect(() => {
    console.log('stock: ', stock)
 }, [stock]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar stockCarrito={stock}/>
        <ItemListContainer greeting={'No estas anticuado, tenés estilo!'} /> 
        <div className='container'>
                <div className='row'>
                <div className="col-4">
                  </div>
                <div className="col-2">
                  <a href="#" className="btn btn-outline-secondary btn-block" onClick={() => quitarItems()}>Quitar carrito</a>
                  </div>
                  <div className="col-2">
                  <a href="#" className="btn btn-outline-secondary btn-block" onClick={() => agregarItems()}>Agregar carrito</a>
                  </div>
                  <div className="col-4">
                  </div>
                </div>
        
        </div>
      </header>
    </div>
  );
}

export default App;