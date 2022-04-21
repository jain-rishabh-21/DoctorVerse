import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react'
import { Router, Outlet } from 'react-location';
import { routes, location } from "./routes"

function App() {
  return (
    <div className="App">

      <Router routes={routes} location={location}>
        <div className="App" >
            <Outlet />     
              
        </div>
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



