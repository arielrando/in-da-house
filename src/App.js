import React,{useEffect,useState} from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

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
        
        <BrowserRouter>
        <NavBar stockCarrito={stock}/>
          <Switch>
            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/category/:id'>
              <ItemListContainer  greeting={'Esta es la categoria: '} />
            </Route>
            <Route path='/'>
            <ItemListContainer greeting={'No estas anticuado, tenés estilo!'} /> 
            <div className='container'>
                    <div className='row'>
                    <div className="col-4">
                      </div>
                    <div className="col-2">
                      <button href="#" className="btn btn-outline-secondary btn-block" onClick={() => quitarItems()}>Quitar carrito</button>
                      </div>
                      <div className="col-2">
                      <button href="#" className="btn btn-outline-secondary btn-block" onClick={() => agregarItems()}>Agregar carrito</button>
                      </div>
                      <div className="col-4">
                      </div>
                    </div>
            
            </div>
            </Route>
            
          </Switch>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;