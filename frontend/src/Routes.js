import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App/App'

export default () => {
    return (
        <Switch>
            <Route
                component={App}
                exact
                path={'/'}
            />
        </Switch>
    )
}