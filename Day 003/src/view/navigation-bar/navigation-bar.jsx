/**
 * Navigation bar is always sticked to top of current controllers
 * It includes three parts:
 *     - Left Items, like, back buttons...
 *     - Middle Item, like, view title
 *     - Right Item, like, settings button, operations list button
 */

import React from 'react';

require('./navigation-bar.scss');

class NavigationBar extends React.Component {

    genLeftItems () {
        if (!this.props.leftItem) {
            return null;
        }

        return (
            <button className="left-item back">

            </button>
        );
    }

    genMiddleItem () {
        if (!this.props.title) {
            return null;
        }

        return (
            <div className="middle-item">
                {this.props.title}
            </div>
        );
    }

    genRightItems () {
        if (!this.props.rightItem) {
            return null;
        }

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

NavigationBar.propTypes = {
    title: React.PropTypes.string
};

NavigationBar.defaultProps = {
    title: ''
};

export default NavigationBar;
