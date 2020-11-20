import React from 'react'
import content_wrapper from './../../../public/css/sb-admin-2.css'
import d_flex from './../../../public/css/sb-admin-2.css'
import flex_column from './../../../public/css/sb-admin-2.css'
//import content from './../../../public/css/sb-admin-2.css'

const ContentWrapper = (props) => {
    return (
        <div id={content_wrapper} className={`${d_flex} ${flex_column}`}>

            <Content state={props.state}/>
            <Footer/>

        </div>
    )
}

export default ContentWrapper