import React from 'react'
import '../../../../css/sb-admin-2.css'
import MainPage from './../../../Pages/MainPage'
import UploadImages from "../../../Pages/UploadImages/UploadImages";
import EditGroups from "../../../Pages/EditGroups/EditGroups";
import {Switch, Route} from "react-router-dom";
import EditIndividual from "../../../Pages/EditIndividual/EditIndividual";
import PageHeader from "../../Sidebar/PageHeader";
//import {findPageHeaderActionCreator} from "../../../../redux/state";

const Container = (props) => {
//debugger


    return (
        <div className='container_fluid'>
            <PageHeader/>
            <Switch>
                <Route
                    path={props.state.adminPages.pagesInfo.pages[0].pagePath} exact
                    render={() => <MainPage/>}
                />
                <Route
                    path={props.state.adminPages.pagesInfo.pages[1].pagePath}
                    render={() => <UploadImages
                        state={props.state}
                        dispatch={props.dispatch}/>}
                />
                <Route
                    path={props.state.adminPages.pagesInfo.pages[2].pagePath}
                    render={() => <EditGroups/>}
                />
                <Route
                    path={props.state.adminPages.pagesInfo.pages[3].pagePath}
                    render={() => <EditIndividual/>}
                />
            </Switch>

        </div>
    )
}

export default Container