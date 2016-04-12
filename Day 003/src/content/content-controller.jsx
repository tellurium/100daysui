import React from 'react';

require('./content-controller.scss');

class ContentController extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="content-controller">
                {this.props.children}
            </section>
        );
    }
}

ContentController.propTypes = {

};

ContentController.defaultProps = {

};

export default ContentController;
