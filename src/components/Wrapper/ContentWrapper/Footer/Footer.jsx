import React from 'react'
import sticky_footer from '../../../../css/sb-admin-2.css'
import bg_white from '../../../../css/sb-admin-2.css'
import container from '../../../../css/sb-admin-2.css'
import copyright from '../../../../css/sb-admin-2.css'
import my_auto from '../../../../css/sb-admin-2.css'
import text_center from '../../../../css/sb-admin-2.css'

const Footer= (props) => {
    return (
        <footer className={`${sticky_footer} ${bg_white}`}>
            <div className={`${container} ${my_auto}`}>
                <div className={`${copyright} ${text_center} ${my_auto}`}>
                    <span>Copyright {`\u00A9 2020`} </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer