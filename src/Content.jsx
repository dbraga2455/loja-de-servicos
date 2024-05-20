import React from "react";
import { Switch, Route} from 'react-router-dom';
import { Store } from "./pages/Store";
import { Servico } from "./pages/Servico"
import { App } from "./pages/Gpt"


export const Content = () => {
    return (
        <Switch>
            <Route exact path='/' component = { Store }/>
            <Route exact path ='/cart' component = { Servico }/>
            <Route exact path='/gpt' component = { App }/>
        </Switch>
    )
}