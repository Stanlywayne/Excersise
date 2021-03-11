import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Album from '../screens/Albumview';
import View from '../screens/Overview'
class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Album />
                    </Route>
                    <Route exact path="/view">
                        <View />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
export default Navigation;