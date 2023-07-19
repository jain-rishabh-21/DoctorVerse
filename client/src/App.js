import './App.css';
import {Suspense} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import { routes } from "./routes"
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div className="App">

      <Router routes={routes}>
        <Suspense fallback={<Loading/>}>
        <Routes> 
         <Route exact path={routes[0].path} Component={routes[0].element}/>
         <Route path={routes[1].path} Component={routes[1].element}/>
         <Route path={routes[2].path} Component={routes[2].element}/>
         <Route path={routes[3].path} Component={routes[3].element}/>
         </Routes>
        </Suspense>
        </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;



