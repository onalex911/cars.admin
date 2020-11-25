import React from 'react'
//import logo from './logo.svg';
//import './App.css';
//import './css/sb-admin-2.css'

import Wrapper from "./components/Wrapper/Wrapper";
//import ArrowUp from "./components/ArrowUp";
import LogoutModal from "./components/LogoutModal";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <div id='page_top'>
            <BrowserRouter>
                <Wrapper state={props.state} dispatch={props.dispatch}/>
                {/*<ArrowUp/>*/}
                <LogoutModal/>
            </BrowserRouter>
        </div>
    );
}

export default App;
