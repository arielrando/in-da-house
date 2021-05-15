import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer'
import CarritoContainer from './Container/CarritoContainer'
import Carrito from './Context/CartContext'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carrito>
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/carrito'>
              <CarritoContainer greeting={'Carrito'}/>
            </Route>
            <Route path='/category/:id'>
              <ItemListContainer  greeting={'Esta es la categoria: '} />
            </Route>
            <Route path='/'>
            <ItemListContainer greeting={'No estas anticuado, tenés estilo!'} /> 
            </Route>
          </Switch>
        </BrowserRouter>
        </Carrito>
      </header>
    </div>
  );
}

export default App;