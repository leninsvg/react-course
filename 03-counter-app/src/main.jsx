import React from 'react'
import ReactDOM from 'react-dom/client'
// Solo con importar ya se cargan los estilos
import './styles.css'
import {CounterApp} from './CounterApp.jsx';
// import {FirstApp} from "./FirstApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirstApp></FirstApp>*/}
        <CounterApp value={10}></CounterApp>
    </React.StrictMode>
)
