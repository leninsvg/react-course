import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import '../../08-use-reducer/intro.redurcer.js'
import {AboutPage} from '../../09-use-context/pages/AboutPage.jsx';
import {MainApp} from '../../09-use-context/MainApp.jsx';
// import {Padre} from './07-tarea-memo/Padre.jsx';
// import {TodoApp} from '../../08-use-reducer/TodoApp.jsx';
// import {HooksApp} from "./HooksApp.jsx";
// import {CounterApp} from "./01-useState/CounterApp.jsx";
// import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook.jsx";
// import {SimpleForm} from "./02-useEffect/SimpleForm.jsx";
// import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook.jsx";
// import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks.jsx";
// import {FocusScreen} from "./04-userRef/FocusScreen.jsx";
// import {Layout} from './05-useLayoutEffect/Layout.jsx';
// import {Memorize} from './06-memo/Memorize.jsx';
// import {MemoHook} from './06-memo/MemoHook.jsx';
// import {CallbackHook} from './06-memo/CallbackHook.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<MainApp></MainApp>
	</BrowserRouter>
	// </React.StrictMode>,
)
