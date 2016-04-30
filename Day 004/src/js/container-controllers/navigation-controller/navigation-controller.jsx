import React from 'react';
import classNames from 'classnames';

import NavigationBar from './navigation-bar/navigation-bar.jsx';
import Toolbar from './toolbar/toolbar.jsx';
import ContentController from '../../content-controllers/content-controller/content-controller.jsx';

require('./navigation-controller.scss');

class NavigationController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewControllers: [],
            topViewController: null,
            visibleViewController: this.props.rootViewControllerClass
        };
    }

    render() {
        let cn = classNames('navigation-controller', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <this.props.navigationBarClass className="top" delegate={this}/>
                <this.state.visibleViewController className="middle" />
                <this.props.toolbarClass className="bottom" />
            </div>
        );
    }
}

NavigationController.propTypes = {
    className: React.PropTypes.string,
    navigationBarClass: React.PropTypes.func,
    toolbarClass: React.PropTypes.func,
    rootViewControllerClass: React.PropTypes.func
};

NavigationController.defaultProps = {
    className: '',
    navigationBarClass: NavigationBar,
    toolbarClass: Toolbar,
    rootViewControllerClass: ContentController
};

export default NavigationController;
