import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import store from './redux/state'
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
//import './css/sb-admin-2.css'


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

                <App state={store.getState()}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
