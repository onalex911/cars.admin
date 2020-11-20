import React from 'react'
import navbar_nav from './../../../public/css/sb-admin-2.css'
import nav_item from './../../../public/css/sb-admin-2.css'
import sidebar from './../../../public/css/sb-admin-2.css'
import sidebar_dark from './../../../public/css/sb-admin-2.css'
import accordion from './../../../public/css/sb-admin-2.css'
import accordionSidebar from './../../../public/css/sb-admin-2.css'
import bg_gradient_primary from './../../../public/css/sb-admin-2.css'

const Sidebar = (props) => {
    return (
        <ul className={`${navbar_nav} ${bg_gradient_primary} ${sidebar} ${sidebar_dark} ${accordion}`} id={accordionSidebar}>
            <li className={`${nav_item.active}`}>Item 1</li>
            <li className={nav_item}>Item 2</li>
            <li className={nav_item}>Item 3</li>
        </ul>
    )
}

export default Sidebar