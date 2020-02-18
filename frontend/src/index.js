import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import NavBar from './components/NavBar/NavBar'
import Routes from './Routes';

const routes = (
    <Provider store={store}>
        <Router>
            <NavBar/>
            <App>
                <Routes />
            </App>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));

serviceWorker.unregister();
