import React from 'react';
import App from './components/App';

import HashHistory from 'react-router/lib/HashHistory';

React.render(
    <App history={new HashHistory()} />,
    document.getElementById('app')
);
