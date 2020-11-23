import React from 'react'
import '../../../css/sb-admin-2.css'
import {Link} from "react-router-dom";
//import SidebarMenu from "./SidebarMenu";
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
            {props.menuElements}
            <hr className={`sidebar_divider my_0`}/>
        </ul>
    )
}

export default Sidebar