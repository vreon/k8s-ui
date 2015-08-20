import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import * as reducers from '../reducers/index';

import KubernetesApp from './KubernetesApp';
import * as pages from './pages';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App {
    render() {
        const { history } = this.props;
        return (
            <Provider store={store}>
                {renderRoutes.bind(null, history)}
            </Provider>
        );
    }
}

function renderRoutes(history) {
    return (
        <Router history={history}>
            <Route component={KubernetesApp}>
                <Route path="/" component={pages.Dashboard} />
                <Route path="create" component={pages.Create} />
                <Route path="namespaces/:name" component={pages.Namespace} />
                <Route path="nodes/:name" component={pages.Node} />
            </Route>
        </Router>
    );
}

export default App;
