/**
 * Navigation bar is always sticked to top of current controllers
 * It includes three parts:
 *     - Left Items, like, back buttons...
 *     - Middle Item, like, view title
 *     - Right Item, like, settings button, operations list button
 */

import React from 'react';
import ReactDOM from 'react-dom';

require('./navigation-bar.scss');

class NavigationBar extends React.Component {

    genLeftItems () {
        return (
            <button className="left-item back">
                Messages
            </button>
        );
    }

    genMiddleItem () {
        return (
            <div className="middle-item">
                Jeanne
            </div>
        );
    }

    genRightItems () {
        return (
            <button className="right-item">
                Details
            </button>
        );
    }

    render () {
        return (
            <div className="navigation-bar">
                {this.genLeftItems()}
                {this.genMiddleItem()}
                {this.genRightItems()}
            </div>
        );
    }
}

export default NavigationBar;
