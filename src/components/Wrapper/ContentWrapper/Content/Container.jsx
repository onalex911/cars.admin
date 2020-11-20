import React from 'react'
import '../../../../css/sb-admin-2.css'

const Container= (props) => {
    return (
        <div className='container_fluid'>

            <h3>{props.state.greeting}</h3>

        </div>
    )
}

export default Container