import React from 'react'
import '../../../css/sb-admin-2.css'
import s from './Sidebar.module.css'
import {NavLink, Link} from "react-router-dom";

const Sidebar = (props) => {
    //debugger
    return (

            <li className={`${s.nav_item}`}>
                <NavLink
                    to={props.path}
                    activeClassName={s.active}>
                    {props.menuTitle}
                </NavLink>
            </li>

    )
}

export default Sidebar