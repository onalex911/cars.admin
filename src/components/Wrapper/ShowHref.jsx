//из документации React Router
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {findPageHeaderActionCreator} from "../../redux/state";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { match, location, history } = this.props;
        const action = findPageHeaderActionCreator(location.pathname)
        this.props.dispatch(action)

        return <span>{this.props.state.adminPages.activePage.pageHeader}</span>;
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

