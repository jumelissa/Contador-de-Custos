import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../pages/login/index';
import { PrivateRoute } from './privateRoute';

const Routes = () => {
        return(
            <Router>
                <Switch>
                    <PrivateRoute exact path="/main"> <Main /></PrivateRoute>
                    <Route exact path="/"><Login /></Route>
                </Switch>
            </Router>
        )
}

export default Routes;