import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../view/navigation-bar/navigation-bar.jsx';
import ContentController from '../content/content-controller.jsx';

require('./navigation-controller.scss');

class NavigationController extends React.Component {
  render() {
    return (
        <div className="navigation-controller">
            <NavigationBar />
            <ContentController />
        </div>
    );
  }
}

export default NavigationController;
