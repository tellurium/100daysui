import React from 'react';
import classNames from 'classnames';

require('./app.scss');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let cn = classNames('app', ...this.props.className.split(' '));

        return (
            <div className={cn}>
                <h1> Hello Boy </h1>
            </div>
        );
    }
}

App.propTypes = {
    className: React.PropTypes.string
};

App.defaultProps = {
    className: ''
};

export default App;
