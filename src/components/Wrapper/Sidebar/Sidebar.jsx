import React from 'react'
import '../../../css/sb-admin-2.css'
import s from './Sidebar.module.css'
import {Link} from "react-router-dom";

const Sidebar = (props) => {

    return (
        <ul className={`navbar_nav bg_gradient_primary sidebar sidebar_dark`}>
            <Link className={`sidebar_brand d_flex align_items_center justify_content_center`} to="/">

                <div className={`sidebar_brand_text mx_3`}>Cars Admin</div>
            </Link>
            <hr className={`sidebar_divider my_0`} />
            <div className="sidebar_heading">
                Interface
            </div>
                    <li className={`${s.nav_item} ${s.active}`}><Link to={props.state.pagesInfo.uploading.pagePath}>Загрузить изобр.</Link></li>
                    <li className={`${s.nav_item}`}><Link to={props.state.pagesInfo.editGroups.pagePath}>Редакт. группы</Link></li>
                    <li className={`${s.nav_item}`}><Link to={`#`}>Редакт. инд. изобр.</Link></li>
            <hr className={`sidebar_divider my_0`} />
        </ul>
    )
}

export default Sidebar