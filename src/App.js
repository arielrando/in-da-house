import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'No estas anticuado, tenés estilo!'}/> 
        
      </header>
    </div>
  );
}

export default App;