import React from 'react'
//import logo from './logo.svg';
//import './App.css';
//import './css/sb-admin-2.css'

import Wrapper from "./components/Wrapper/Wrapper";
import ArrowUp from "./components/ArrowUp";
import LogoutModal from "./components/LogoutModal";

function App(props) {
  return (
    <div>
      <Wrapper state={props.state}/>
      <ArrowUp/>
      <LogoutModal/>
    </div>
  );
}

export default App;
