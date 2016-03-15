require('../../_common/css/reset.scss');
require('./view/base.scss');
require('./view/theater/theater.scss');
require('./view/stage/stage.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import RootContainerController from './container/root-container-controller.jsx';
import NavigationController from './container/navigation-controller.jsx';
import Theater from './view/theater/theater.jsx';
import Stage from './view/stage/stage.jsx';

ReactDOM.render(
    (
        <div className="theater">
            <div className="stage">
                <RootContainerController />
            </div>
        </div>
    ),
    document.querySelector('.target')
);

ReactDOM.render(
    (
        <NavigationController />
    ),
    document.querySelector('.root-container-controller')
);
