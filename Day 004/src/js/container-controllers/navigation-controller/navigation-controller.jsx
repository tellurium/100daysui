import React from 'react';
import classNames from 'classnames';

require('./navigation-controller.scss');

class NavigationController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('navigation-controller', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <h1>Hello World</h1>
            </div>
        );
    }
}

NavigationController.propTypes = {
    className: React.PropTypes.string
};

NavigationController.defaultProps = {
    className: ''
};

export default NavigationController;
