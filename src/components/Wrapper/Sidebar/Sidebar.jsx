import React from 'react'
import '../../../css/sb-admin-2.css'
import s from './Sidebar.module.css'
import {NavLink, Link} from "react-router-dom";
//import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
//import 'font-awesome/css/font-awesome.min.css';

const Sidebar = (props) => {
    //debugger
    return (
        <ul className={`navbar_nav bg_gradient_primary sidebar sidebar_dark`}>
            <Link className={`sidebar_brand d_flex align_items_center justify_content_center`} to="/">

                {/*<FontAwesome name="rocket" size="2x"  />*/}
                <div className={`sidebar_brand_text mx_3`}>Cars Admin</div>
            </Link>
            <hr className={`sidebar_divider my_0`}/>
            <div className="sidebar_heading">
                Interface
            </div>
            <li className={`${s.nav_item}`}>
                <NavLink
                    to={props.state.pagesInfo.pages[1].pagePath}
                    activeClassName={s.active}
                    isActive={props.state.setActive}
                >
                        Загрузить изобр.
                </NavLink>
            </li>
            <li className={`${s.nav_item}`}>
                <NavLink
                    to={props.state.pagesInfo.pages[2].pagePath}
                    activeClassName={s.active}
                    isActive={props.state.setActive}
                >
                        Редакт. группы
                </NavLink>
            </li>
            <li className={`${s.nav_item}`}>
                <NavLink
                    to={props.state.pagesInfo.pages[3].pagePath}
                    activeClassName={s.active}
                    isActive={props.state.setActive}
                >
                        Редакт. инд. изобр.
                </NavLink>
            </li>
            <hr className={`sidebar_divider my_0`}/>
        </ul>
    )
}

export default Sidebar