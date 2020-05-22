import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/main';
import Login from './pages/login/index';

const Routes = () => {
        return(
            <Router>
                <Switch>
                    <Route path="/main"><Main /></Route>
                    <Route path="/"> <Login /></Route>
                </Switch>
            </Router>
        )
}

export default Routes;