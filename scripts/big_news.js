define([
    'jquery',
    'config'
], function ($, config) {
    'use strict';

    function addBigNews (text) {
        $('.big-news ul').append('<li>' + text + '</li>')
    }

    return function () {
        for (var i = 0; i < config.main.bigNews.length; i++) {
            addBigNews(config.main.bigNews[i])
        }
    }
});