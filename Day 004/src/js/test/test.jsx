import React from 'react';
import classNames from 'classnames';

require('./test.scss');

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('test', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <h1>I am Testing</h1>
            </div>
        );
    }
}

Test.propTypes = {
    className: React.PropTypes.string
};

Test.defaultProps = {
    className: ''
};

export default Test;
