import React from 'react';
import ReactDOM from 'react-dom';

require('./button.css');

class Button extends React.Component {
  render() {
    return (
        <div className="button">
            <h1>Hello {this.props.name}</h1>
        </div>
    );
  }
}

export default Button;
