import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Landing from "../Landing";

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => <Redirect to="/100-days-story" />} />
                <Route path="/100-days-story" component={Landing} />
            </div>
        )
    }
}