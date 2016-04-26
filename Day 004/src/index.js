import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import { camelCaseToHyphen } from './js/utils/name-convertions.js';
import Theater from './js/theater/theater.jsx';
import LinkList from './js/link-list/link-list.jsx';
import ContainerControllers from './js/container-controllers/index.js';

require('../../_common/css/reset.scss');
require('./index.scss');

const categories = [
    {
        name: 'Container Controllers',
        path: '/container-controllers',
        entry: ContainerControllers,
        links: getLinksByEntry(ContainerControllers)
    },
    {
        name: 'Content Controllers',
        path: '/content-controllers',
        links: []
    },
    {
        name: 'Views',
        path: '/views',
        links: []
    },
    {
        name: 'Controls',
        path: '/controls',
        links: []
    }
];

const routes = [
    {
        path: '/',
        component: Theater,
        indexRoute: {
            component: LinkList,
            links: categories.map(c => {
                return {
                    name: c.name,
                    path: c.path
                };
            })
        },
        childRoutes: categories.map(c => {
            return {
                path: c.path,
                indexRoute: {
                    component: LinkList,
                    links: c.links.map(l => {
                        return {
                            name: l.name,
                            path: c.path + l.path
                        };
                    })
                },
                childRoutes: c.links.map(l => {
                    return {
                        path: c.path + l.path,
                        component: c.entry[l.name]
                    };
                })
            };
        })
    }
];

function getLinksByEntry (entry) {
    return Object.keys(entry).map(c => {
        return {
            name: c,
            path: '/' + camelCaseToHyphen(c, true)
        };
    });
}

window.onload = function () {
    let target = document.querySelector('.target');
    render((<Router history={hashHistory} routes={routes} />), target);
};
