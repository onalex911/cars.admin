import React from 'react'
import '../../css/sb-admin-2.css'
//import Sidebar from "./Sidebar/Sidebar";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import SidebarContainer from "./Sidebar/SidebarContainer";
import {findPageHeaderActionCreator} from "../../redux/state";

const Wrapper = (props) => {

    return (
        <div id='wrapper'>

                <SidebarContainer state={props.state}/>
                <ContentWrapper
                    state={props.state}
                    dispatch={props.dispatch}
                />

        </div>
    )
}

export default Wrapper