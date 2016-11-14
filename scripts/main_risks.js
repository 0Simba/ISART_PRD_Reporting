define([
    'jquery',
    'config'
], function ($, config) {
    'use strict'

    function setMainRisks () {
        for (var i = 0; i < config.main.risks.length; i++) {
            addRisk(config.main.risks[i])
        }
    }


    function addRisk (data) {
        $('.risks tbody').append('<tr></tr>')
        var $tr = $('.risks tr').last()

        $tr.append('<td>' + data.name        + '</td>')
        $tr.append('<td>' + data.probability + '</td>')
        $tr.append('<td>' + data.gravity     + '</td>')
        $tr.append('<td>' + data.solution    + '</td>')
    }


    return setMainRisks
})