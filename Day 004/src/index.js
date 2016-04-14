import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import App from './js/app/app.jsx';
import Theater from './js/theater/theater.jsx';
import Test from './js/test/test.jsx'

require('../../_common/css/reset.scss');
require('./index.scss');

const routes = [
    {
        path: '/',
        component: Theater,
        indexRoute: { component: Test },
        childRoutes: [
            { path: 'test', component: Test }
        ]
    },
    {
        path: '/app',
        component: App
    }
];

window.onload = function () {
    render((<Router history={hashHistory} routes={routes} />), document.querySelector('.target'));
}
