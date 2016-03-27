import React from 'react';
import ReactDOM from 'react-dom';
import Application from '../app.js';
import SettingsMainController from './settings-main-controller.jsx';

class Settings extends Application {
    constructor(rootNode) {
        super(rootNode);

        this.state = {
            rootNode,
            rootViewController: null
        };

        let rootControllerReactElement = React.createElement(SettingsMainController, null);

        this.state.rootViewController = ReactDOM.render(rootControllerReactElement, this.state.rootNode);
    }

    start() {
        this.state.rootViewController.start();
    }
}

export default Settings;
