'use strict';

var app = {

    init: function () {

        window.addEventListener(
            "load",
            app.onDeviceReady,
            false
        );
    }, 

    onDeviceReady: function () {
        window.location.href = '#home';
    }
};