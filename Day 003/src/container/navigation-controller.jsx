import React from 'react';
import NavigationBar from '../view/navigation-bar/navigation-bar.jsx';

require('./navigation-controller.scss');

class NavigationController extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation-controller">
                <NavigationBar title={this.props.title} />
                {this.props.children}
            </div>
        );
    }
}

NavigationController.propTypes = {
    title: React.PropTypes.string
};

NavigationController.defaultProps = {
    title: ''
};

export default NavigationController;
