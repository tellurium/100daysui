const settingStore = {
    airplaneMode: {
        isEnabled: false
    },
    wlan: {
        current: null,
        availableNetworks: null,
        storedNetworks: null,
        isAutoJoin: false
    },
    bluetooth: {
        isEnabled: false,
        myDevices: null
    },
    cellular: {
        isEnabled: true,
        dataOptions: null
    },
    personalHotspot: {
        isEnabled: false,
        password: null
    },
    vpn: {

    },
    carrier: {
        isAutomatic: false,
        name: null
    },
    notifications: {
        sortOrder: null,
        isGroupByApp: true,
        notificatioStyles: null
    },
    controlCenter: {
        isAccessableOnLockScreen: true,
        isAccessableWithinApp: true
    },
    doNotDisturb: {
        isManual: false,
        schedule: {
            isScheduled: false,
            from: null,
            to: null
        },
        allowCallsFrom: null
    },
    general: {

    },
    displayAndBirghness: {

    },
    wallpaper: {

    },
    sounds: {

    },
    touchIDandPasscode: {

    },
    battery: {

    },
    privacy: {

    },
    iCloud: {

    },
    iTunesAndAppStore: {

    },
    walletAndApplePay: {

    }
};

export default settingStore;
