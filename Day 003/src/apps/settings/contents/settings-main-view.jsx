import React from 'react';
import TableView from '../../../view/table-view/table-view.jsx';
import TableViewHeaderFooterView from '../../../view/table-view-header-footer-view/table-view-header-footer-view.jsx';
import TableViewCell from '../../../view/table-view-cell/table-view-cell.jsx';

import chevronImg from '../../../../res/chevron.svg';

class SettingsMainView extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateTo(view) {
        console.log('navigation');
    }

    render() {
        return (
            <TableView>
                <TableViewHeaderFooterView />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Airplane Mode" imageClass="airplane-mode" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="WLAN" imageClass="wlan"/>
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Bluetooth" imageClass="bluetooth"/>
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Cellular" imageClass="cellular"/>
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Carrier" imageClass="carrier"/>

                <TableViewHeaderFooterView />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Notifications" imageClass="notifications" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Control Center" imageClass="control-center" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Do Not Disturb" imageClass="do-not-disturb" />

                <TableViewHeaderFooterView />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="General" imageClass="general" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Display & Brightness" imageClass="display-brightness" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Wallpaper" imageClass="wallpaper" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Sounds" imageClass="red" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Touch ID & Passcode" imageClass="red" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Battery" imageClass="green" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Privacy" imageClass="gray" />

                <TableViewHeaderFooterView />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="iCloud" imageClass="gray" detailText="100daysui@world.com" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="iTunes & App Store" imageClass="blue" />
                <TableViewCell onClick={this.navigateTo.bind(this)} title="Wallet & Apple Pay" imageClass="gray" />

                <TableViewHeaderFooterView />
            </TableView>
        );
    }
}

export default SettingsMainView;
