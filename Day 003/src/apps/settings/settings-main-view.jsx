import React from 'react';
import TableView from '../../view/table-view/table-view.jsx';
import TableViewHeaderFooterView from '../../view/table-view-header-footer-view/table-view-header-footer-view.jsx';
import TableViewCell from '../../view/table-view-cell/table-view-cell.jsx';

import chevronImg from '../../../res/chevron.svg';

require('./settings.scss');

class SettingsMainView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableView>
                <TableViewHeaderFooterView />
                <TableViewCell title="Airplane Mode" imageClass="airplane-mode" />
                <TableViewCell title="WLAN" imageClass="wlan"/>
                <TableViewCell title="Bluetooth" imageClass="bluetooth"/>
                <TableViewCell title="Cellular" imageClass="cellular"/>
                <TableViewCell title="Carrier" imageClass="carrier"/>

                <TableViewHeaderFooterView />
                <TableViewCell title="Notifications" imageClass="notifications" />
                <TableViewCell title="Control Center" imageClass="control-center" />
                <TableViewCell title="Do Not Disturb" imageClass="do-not-disturb" />

                <TableViewHeaderFooterView />
                <TableViewCell title="General" imageClass="general" />
                <TableViewCell title="Display & Brightness" imageClass="display-brightness" />
                <TableViewCell title="Wallpaper" imageClass="wallpaper" />
                <TableViewCell title="Sounds" imageClass="red" />
                <TableViewCell title="Touch ID & Passcode" imageClass="red" />
                <TableViewCell title="Battery" imageClass="green" />
                <TableViewCell title="Privacy" imageClass="gray" />

                <TableViewHeaderFooterView />
                <TableViewCell title="iCloud" imageClass="gray" detailText="100daysui@world.com" />
                <TableViewCell title="iTunes & App Store" imageClass="blue" />
                <TableViewCell title="Wallet & Apple Pay" imageClass="gray" />

                <TableViewHeaderFooterView />
            </TableView>
        );
    }
}

export default SettingsMainView;
