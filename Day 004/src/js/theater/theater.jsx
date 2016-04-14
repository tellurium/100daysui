import React from 'react';
import classNames from 'classnames';

import Stage from '../stage/stage.jsx';

require('./theater.scss');

class Theater extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('theater', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <Stage>
                    {this.props.children}
                </Stage>
            </div>
        );
    }
}

Theater.propTypes = {
    className: React.PropTypes.string
};

Theater.defaultProps = {
    className: ''
};

export default Theater;
