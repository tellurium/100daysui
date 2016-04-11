import React from 'react';
import NavigationController from '../../container/navigation-controller.jsx';
import ContentController from '../../content/content-controller.jsx';
import SettingContents from './contents/index'

class SettingsMainController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Settings',
            loaded: false,
            currentView: SettingContents.SettingsMainView
        };
    }

    getContent() {
        let rootView = null;

        if (!this.state.loaded) {
            return (
                <ContentController />
            );
        }

        return (
            <ContentController>
                <this.state.currentView />
            </ContentController>
        );
    }

    render() {
        return (
            <NavigationController title={this.state.title}>
                {this.getContent()}
            </NavigationController>
        );
    }

    start() {
        this.setState({
            loaded: true
        });
    }
}

export default SettingsMainController;
