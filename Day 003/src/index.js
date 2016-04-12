require('../../_common/css/reset.scss');
require('./view/base.scss');
require('./view/theater/theater.scss');
require('./view/stage/stage.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Setting from './apps/settings/settings.js';

ReactDOM.render(
    (
        <div className="theater">
            <div className="stage"></div>
        </div>
    ),
    document.querySelector('.target')
);

var app = new Setting(document.querySelector('.stage'));

window.onload = function () {
    app.start();
};
