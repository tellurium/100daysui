import React from 'react';

require('./table-view.scss');

class TableView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="table-view">
                {this.props.children}
            </div>
        );
    }
}

TableView.propTypes = {

};

TableView.defaultProps = {

};

export default TableView;
