import React from 'react';
import Button from '../view/button/button.jsx';

require('./content-controller.scss');

class ContentController extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-controller">
                {this.props.children}
            </div>
        );
    }
}

ContentController.propTypes = {

};

ContentController.defaultProps = {

};

export default ContentController;
