import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../view/navigation-bar/navigation-bar.jsx';
import ContentController from '../content/content-controller.jsx';

require('./navigation-controller.scss');

class NavigationController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="navigation-controller">
                <NavigationBar />
                <ContentController />
            </div>
        );
    }
}

NavigationController.propTypes = {

};

NavigationController.defaultProps = {

};

export default NavigationController;
