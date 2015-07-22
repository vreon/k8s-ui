import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'redux/react';
import { Router, Route } from 'react-router';
import * as reducers from '../reducers/index';

import KubernetesApp from './KubernetesApp';
import * as pages from './pages';

const store = createStore(reducers);

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
