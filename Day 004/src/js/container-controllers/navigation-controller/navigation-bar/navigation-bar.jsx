import React from 'react';
import classNames from 'classnames';

import { genComponents } from '../../../utils/react-util.jsx';

require('./navigation-bar.scss');

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftItems: [
                {
                    type: 'button'
                }
            ],
            title: '',
            rightItems: []
        };
    }

    genLeftItems () {
        return (
            <div className="left">
                {genComponents(this.state.leftItems)}
            </div>
        );
    }

    genMiddleItem () {
        return (
            <div className="middle">
                <span>{this.state.title}</span>
            </div>
        );
    }

    genRightItems () {
        return (
            <div className="right">
                {genComponents(this.state.rightItems)}
            </div>
        );
    }


    render() {
        let cn = classNames('navigation-bar', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                {this.genLeftItems()}
                {this.genMiddleItem()}
                {this.genRightItems()}
            </div>
        );
    }
}

NavigationBar.propTypes = {
    className: React.PropTypes.string,
    delegate: React.PropTypes.object
};

NavigationBar.defaultProps = {
    className: ''
};

export default NavigationBar;
