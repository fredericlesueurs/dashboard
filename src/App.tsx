import React from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/Home";

class App extends React.Component<Record<string, never>, Record<string, never>>{
    render(): React.ReactNode {
        return (
            <Router>
                <Route path="/" component={Home} />
            </Router>
        )
    }
}

export default hot(module)(App);