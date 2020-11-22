import React from 'react'
import Sidebar from "./Sidebar";
import SidebarMenu from "./SidebarMenu";


const SidebarContainer = (props) => {
    //debugger
    let pages = props.state.adminPages.pagesInfo.pages
    let menuElements = pages.map(m => <SidebarMenu path={m.pagePath} menuTitle={m.pageMenuTitle}/>)

    return (
        <Sidebar menuElements={menuElements}/>
    )
}

export default SidebarContainer