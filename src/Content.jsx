import React from "react";
import { Switch, Route} from 'react-router-dom';
import { Store } from "./pages/Store"
import { App } from "./pages/Gpt"


export const Content = () => {
    return (
        <Switch>
            <Route exact path='/Store' component = { Store }/>
            <Route exact path='/' component = { App }/>
        </Switch>
    )
}