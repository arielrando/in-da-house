import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Container/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <ItemListContainer greeting={'Bienvenidos! Abrimos pronto!'}/>
      </header>
    </div>
  );
}

export default App;
