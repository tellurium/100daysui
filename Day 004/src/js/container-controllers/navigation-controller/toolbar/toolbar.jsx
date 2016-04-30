import React from 'react';
import classNames from 'classnames';

require('./toolbar.scss');

class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('toolbar', ...this.props.className.split(' '));

        return (
            <div className={cn}>

            </div>
        );
    }
}

Toolbar.propTypes = {
    className: React.PropTypes.string
};

Toolbar.defaultProps = {
    className: ''
};

export default Toolbar;
