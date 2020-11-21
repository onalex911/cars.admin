import React from 'react'
import '../../css/sb-admin-2.css'
import Sidebar from "./Sidebar/Sidebar";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import {BrowserRouter as Router} from "react-router-dom";

const Wrapper = (props) => {
    return (
        <div id='wrapper'>
            <Router>
                <Sidebar state={props.state.adminPages}/>
                <ContentWrapper state={props.state.adminPages}/>
            </Router>
        </div>
    )
}

export default Wrapper