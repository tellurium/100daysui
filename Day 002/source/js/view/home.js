(function(){
    'use strict';

    var RAD = Math.PI / 180;

    var HomePage = Backbone.View.extend({
        el: '#home-page',

        events: {

        },

        initialize: function () {
            var x = this.el.querySelector('.score-wrapper');
            x.style.width = x.clientHeight + 'px';

            this.delegateSwipeEvents();

            var value = 80, 
                time = 1600,
                interval = 33,
                cur = 0,
                intervalID = setInterval(function (value, view) {
                    cur += (interval / time * value)
                    if (cur >= value) {
                        cur = value;
                    }

                    view.drawCircle(cur);

                    if (cur >= value) {
                        stopInterval();
                    }
                }, interval, value, this), 
                stopInterval = function () {
                    clearInterval(intervalID);
                };
        },

        render: function () {
            return this;
        },

        delegateSwipeEvents: function () {
            $('.report > header').on('swipeleft', this.showPrevious);
            $('.report > header').on('swiperight', this.showNext);
        },

        /* Animations */
        drawCircle: function (value) {
            var ring = this.el.querySelector('path'),
                text = this.el.querySelector('.score'),
                r = 50,
                value = (100 - Math.round(value)),
                degrees = value * 3.59999,
                rad = degrees * RAD,
                x = (Math.sin(rad) * r).toFixed(2),
                y = -(Math.cos(rad) * r).toFixed(2),
                lenghty = window.Number(degrees < 180),
                descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 0/* x轴偏移度 */, lenghty, 0/* 逆时针画弧 */, x, y, 'z'/*闭合*/];

                ring.setAttribute('d', descriptions.join(' '));

                text.innerText = 100 - value;
        },

        /* Events */
        showPrevious: function (e) {
            var reportHeader = this;
            reportHeader.classList.add('pt-page-moveToLeft');
            $(reportHeader).on('webkitAnimationEnd', function () {
                $(reportHeader).off('webkitAnimationEnd');
                reportHeader.classList.remove('pt-page-moveToLeft');

                reportHeader.classList.add('pt-page-moveFromRight');
                $(reportHeader).on('webkitAnimationEnd', function () {
                    $(reportHeader).off('webkitAnimationEnd');
                    reportHeader.classList.remove('pt-page-moveFromRight');
                });
            });
        },

        showNext: function (e) {
            var reportHeader = this;
            reportHeader.classList.add('pt-page-moveToRight');
            $(reportHeader).on('webkitAnimationEnd', function () {
                $(reportHeader).off('webkitAnimationEnd');
                reportHeader.classList.remove('pt-page-moveToRight');

                reportHeader.classList.add('pt-page-moveFromLeft');
                $(reportHeader).on('webkitAnimationEnd', function () {
                    $(reportHeader).off('webkitAnimationEnd');
                    reportHeader.classList.remove('pt-page-moveFromLeft');
                });
            });
        }
    });

    if (app) {
        app.home = new HomePage();
    };
}());