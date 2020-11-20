import React from 'react'

import scroll_to_top from '../css/sb-admin-2.css'
import rounded from '../css/sb-admin-2.css'
import {Link} from "react-router-dom";

const ArrowUp = () => {
    return (
        <div>
            <Link className={`${scroll_to_top} ${rounded}`} to={`#page-top`}>
                {/*<i className={`${fas} fa-angle-up"></i>*/}
                Наверх
            </Link>
        </div>
    )
}

export default ArrowUp