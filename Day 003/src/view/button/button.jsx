/**
 * Button
 * # properties:
 * - title        - Title. String displayed on the button
 * - className    - Class names. Space divided string. Like, 'back roasted'.
 * - image        - Image inside the button.
 * - click        - Click event handler.
 *
 * # states:
 * - normal       - True if current button is enabled but neither selected or highlighted. Default is `true`
 * - highlighted  - True if current button is pressed. It is a state after a touch enters and before there is a touch up. Default is `false`.
 * - disabled     - True if current button is disabled. Default is `false`.
 * - selected     - It is not used by button. Default is `false`.
 * - focused      - True if current button is focused. Default is `false`. It is a state before highlighted.
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { EMPTY_FUNC } from '../../common/common.js';

require('./button.scss');

const BUTTON_TYPES = {
    back: require('../../../res/chevron.svg')
};

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            normal: true,
            highlighted: false,
            disabled: false,
            selected: false,
            focused: false
        };
    }

    onTouchStart() {
        this.setState({
            highlighted: true
        });
    }

    onClick() {
    }

    onTouchEnd() {
        this.setState({
            highlighted: false
        });
    }

    getTitle() {
        return (
            <span>{this.props.title}</span>
        );
    }

    getImage() {
        let image = this.props.image || BUTTON_TYPES[this.props.type];
        if (!image) {
            return null;
        }

        return (
            <img className="icon" src={image} />
        );
    }

    render() {
        let cn = classNames({
            'button': true,
            'highlighted': this.state.highlighted,
            'disabled': this.state.disabled,
            'selected': this.state.selected,
            'focused':this.state.focused
        }, ...this.props.className.split(' '));
        return (
            <div className={cn}
                onTouchStart={this.onTouchStart.bind(this)}
                onTouchEnd={this.onTouchEnd.bind(this)}
                onMouseDown={this.onTouchStart.bind(this)}
                onMouseUp={this.onTouchEnd.bind(this)}
                onClick={this.onClick.bind(this)}>
                {this.getImage()}
                {this.getTitle()}
            </div>
        );
    }
}

Button.propTypes = {
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    image: React.PropTypes.string,
    click: React.PropTypes.func,
    type: React.PropTypes.string
};

Button.defaultProps = {
    title: '',
    className: '',
    image: '',
    click: EMPTY_FUNC,
    type: ''
};

export default Button;
