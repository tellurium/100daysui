import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../view/button/button.jsx';

require('./content-controller.scss');

class ContentController extends React.Component {
  render() {
    return (
        <div className="content-controller">
            <Button title="Hello World!"/>
        </div>
    );
  }
}

export default ContentController;
