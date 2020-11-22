import React from 'react'
import '../../css/sb-admin-2.css'
import Sidebar from "./Sidebar/Sidebar";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import {BrowserRouter as Router} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Wrapper = (props) => {

    return (
        <div id='wrapper'>
            <Router>
                <SidebarContainer state={props.state}/>
                <ContentWrapper
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </Router>
        </div>
    )
}

export default Wrapper