import React from 'react'
import '../../../css/sb-admin-2.css'
//import d_flex from '../../../css/sb-admin-2.css'
//import flex_column from '../../../css/sb-admin-2.css'
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
//import content from './../../../css/sb-admin-2.css'

const ContentWrapper = (props) => {
    return (
        <div id='content_wrapper' className={`d_flex flex_column`}>

            <Content
                state={props.state}
                dispatch={props.dispatch}
            />
            <Footer/>

        </div>
    )
}

export default ContentWrapper