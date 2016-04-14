import React from 'react';
import classNames from 'classnames';

require('./stage.scss');

class Stage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('stage', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                {this.props.children}
            </div>
        );
    }
}

Stage.propTypes = {
    className: React.PropTypes.string
};

Stage.defaultProps = {
    className: ''
};

export default Stage;
