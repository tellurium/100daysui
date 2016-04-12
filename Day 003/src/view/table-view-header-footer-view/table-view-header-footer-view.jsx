import React from 'react';

require('./table-view-header-footer-view.scss');

class TableViewHeaderFooterView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="table-view-header-footer-view">
                {this.props.children}
            </div>
        );
    }
}

TableViewHeaderFooterView.propTypes = {

};

TableViewHeaderFooterView.defaultProps = {

};

export default TableViewHeaderFooterView;
