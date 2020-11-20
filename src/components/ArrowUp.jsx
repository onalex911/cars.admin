import React from 'react'
import '../css/sb-admin-2.css'
import {Link} from "react-router-dom";

const ArrowUp = () => {
    return (
        <div>
            <Link className={`scroll_to_top rounded`} to={`#page_top`}>
                {/*<i className={`${fas} fa-angle-up"></i>*/}
                Наверх
            </Link>
        </div>
    )
}

export default ArrowUp