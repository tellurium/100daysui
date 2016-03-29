import React from 'react';
import TableView from '../../view/table-view/table-view.jsx';
import TableViewHeaderFooterView from '../../view/table-view-header-footer-view/table-view-header-footer-view.jsx';
import TableViewCell from '../../view/table-view-cell/table-view-cell.jsx';

class SettingsMainView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableView>
                <TableViewHeaderFooterView />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />

                <TableViewHeaderFooterView />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />

                <TableViewHeaderFooterView />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />

                <TableViewHeaderFooterView />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />


                <TableViewHeaderFooterView />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />

                <TableViewHeaderFooterView />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />
                <TableViewCell />

                <TableViewHeaderFooterView />
                <TableViewCell />

                <TableViewHeaderFooterView />
            </TableView>
        );
    }
}

export default SettingsMainView;
