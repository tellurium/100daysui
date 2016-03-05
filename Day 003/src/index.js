import React from 'react';
import ReactDOM from 'react-dom';
import RootContainerController from './container/root-container-controller.jsx';
import Theater from './view/theater/theater.jsx';
import Stage from './view/stage/stage.jsx';

require('../../_common/css/reset.scss');
require('./view/theater/theater.scss');
require('./view/stage/stage.scss');

ReactDOM.render(
    (
        <div className="theater">
            <div className="stage">
                <span>Hello, bitch</span>
            </div>
        </div>
    ),
    document.querySelector('.target')
);
