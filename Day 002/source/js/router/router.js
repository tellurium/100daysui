(function () {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            'home': 'test'
        },

        test: function () {
            console.log('show test');
        }
    });

    if (app) {
        app.router = new Router();
        Backbone.history.start();
    }
}());