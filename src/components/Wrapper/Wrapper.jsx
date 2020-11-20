import React from 'react'
import wrapper from './../../../public/css/sb-admin-2.min.css'

const Wrapper = (props) => {
    return (
        <div id={wrapper}>
            <Sidebar/>
            <ContentWrapper state={props.state}/>
            <Footer/>
        </div>
    )
}

export default Wrapper