//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Datastore from './components/Datastore';
import PreviewCard from './components/PreviewCard';

function App() {
    const [dataItem, setDataItem] = useState([]);
    
    useEffect(()=>setDataItem(Datastore), []);
    
  return (
    <div className="App">
      
      <div className='box'>
        
        <PreviewCard  item={ dataItem } />
      </div>
      {
      
      /*
       <header className="App-header">
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
      </header>
       */}

    </div>
  );
}

export default App;
