import React from 'react';
import classNames from 'classnames';

require('./content-controller.scss');

class ContentController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('content-controller', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

ContentController.propTypes = {
    className: React.PropTypes.string
};

ContentController.defaultProps = {
    className: ''
};

export default ContentController;
