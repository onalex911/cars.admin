import React from 'react'
import content from './../../../public/css/sb-admin-2.css'

const Container= (props) => {
    return (
        <div id={content}>

            <TopPanel/>
            <Container state={props.state}/>

        </div>
    )
}

export default Container