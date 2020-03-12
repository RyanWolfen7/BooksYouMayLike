import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './components/MainView/MainView';
import AddBook from './components/AddBook/AddBook';

export default () => {
    return (
        <Switch>
            <Route
                component={MainView}
                exact
                path={'/'}
            />
            <Route
                component={AddBook}
                exact
                path={'/addBook'}
            />
        </Switch>
    )
}