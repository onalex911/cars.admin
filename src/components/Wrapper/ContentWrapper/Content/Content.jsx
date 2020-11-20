import React from 'react'
import '../../../../css/sb-admin-2.css'
import TopPanel from "./TopPanel";
import Container from "./Container";

const Content = (props) => {
    return (
        <div id='content'>

            <TopPanel/>
            <Container state={props.state}/>

        </div>
    )
}

export default Content