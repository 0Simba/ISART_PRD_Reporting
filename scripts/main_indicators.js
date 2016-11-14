define([
    'jquery',
    'config'
], function (jquery, config) {
    'use strict'

    function setMainIndicators () {
        for (var name in config.main.indicators) {
            setMainIndicator(name, config.main.indicators[name])
        }
    }


    function setMainIndicator (name, value) {
        $('.main-indicators .' + name).find('.indicator').addClass(value)
    }


    return setMainIndicators
})