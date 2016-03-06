/**
 * Navigation bar is always sticked to top of current controllers
 * It includes three parts:
 *     - Left Item, like, back buttons...
 *     - Middle Item, like, view title
 *     - Right Item, like, settings button, operations list button
 */

import React from 'react';
import ReactDOM from 'react-dom';

require('./navigation-bar.scss');

class NavigationBar extends React.Component {
  render() {
    return (
        <div className="navigation-bar">
            <button className="left-item">
                Messages
            </button>
            <div className="middle-item">
                Jeanne
            </div>
            <button className="right-item">
                Details
            </button>
        </div>
    );
  }
}

export default NavigationBar;
