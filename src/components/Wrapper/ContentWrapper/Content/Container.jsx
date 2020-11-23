import React from 'react'
import '../../../../css/sb-admin-2.css'
import MainPage from './../../../Pages/MainPage'
import UploadImages from "../../../Pages/UploadImages/UploadImages";
import EditGroups from "../../../Pages/EditGroups/EditGroups";
import {Switch, Route} from "react-router-dom";
import EditIndividual from "../../../Pages/EditIndividual/EditIndividual";
import {ShowTheLocationWithRouter} from "../../ShowHref";
//import {findPageHeaderActionCreator} from "../../../../redux/state";


const Container = (props) => {
//debugger
    /*const action = findPageHeaderActionCreator(window.location.pathname)
    props.dispatch(action)
*/
    return (
        <div className='container_fluid'>
            <h1 className={`h3 mb_0`}><ShowTheLocationWithRouter state={props.state} dispatch={props.dispatch}/></h1>
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