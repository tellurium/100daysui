import React from 'react';
import TableView from '../../../view/table-view/table-view.jsx';
import TableViewHeaderFooterView from '../../../view/table-view-header-footer-view/table-view-header-footer-view.jsx';
import TableViewCell from '../../../view/table-view-cell/table-view-cell.jsx';

import chevronImg from '../../../../res/chevron.svg';

class SettingsWlanView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableView>
                <TableViewHeaderFooterView />
                <TableViewCell title="WLAN" />

                <TableViewHeaderFooterView />
                <TableViewCell title="Ask to Join Networks" />
                <TableViewHeaderFooterView>
                    Known networks will be joined automatically. If no known networks are available, you will be asked before joining a new network.
                </TableViewHeaderFooterView>
            </TableView>
        );
    }
}

export default SettingsWlanView;
