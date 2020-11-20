import React from 'react'
import '../../../../css/sb-admin-2.css'
import MainPage from './../../../Pages/MainPage'
import UploadImages from "../../../Pages/UploadImages/UploadImages";
import EditGroups from "../../../Pages/EditGroups/EditGroups";
import {Switch, Route} from "react-router-dom";

const Container = (props) => {
    return (
        <div className='container_fluid'>
            <Switch>
                <Route
                    path={props.state.pagesInfo.main.pagePath} exact
                    render={() => <MainPage/>}
                />
                <Route
                    path={props.state.pagesInfo.uploading.pagePath}
                    render={() => <UploadImages/>}
                />
                <Route
                    path={props.state.pagesInfo.editGroups.pagePath}
                    render={() => <EditGroups/>}
                />
            </Switch>

        </div>
    )
}

export default Container