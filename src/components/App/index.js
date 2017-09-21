import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Landing from "../Landing";

import "../../styles/normalize.css";
import "../../styles/index.css";

export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Route exact path="/" render={() => <Redirect to="/story-of-100days" />} />
                <Route path="/story-of-100days" component={Landing} />
            </div>
        )
    }
}