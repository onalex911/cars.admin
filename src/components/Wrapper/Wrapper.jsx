import React from 'react'
import '../../css/sb-admin-2.css'
import Sidebar from "./Sidebar/Sidebar";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import Footer from "./ContentWrapper/Footer/Footer";

const Wrapper = (props) => {
    return (
        <div id='wrapper'>
            <Sidebar/>
            <ContentWrapper state={props.state}/>
        </div>
    )
}

export default Wrapper