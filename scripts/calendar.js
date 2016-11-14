define([
    'jquery',
    'config'
], function ($, config) {
    'use strict';

    var projectDurationInDay = 0
    var msToDay              = 1 / (1000 * 60 * 60 * 24)


    function set () {
        setProjectDaysDuration()

        for (var i = 0; i < config.calendar.length; i++) {
            addDate(config.calendar[i])
        }

        addReportDay()

        $('.date.model').remove()
    }


    function getProjectDurationInDay () {
        return projectDurationInDay
    }


    function addReportDay () {
        var $date = addDate({
            name : 'now',
            day  : config.reportDay
        })

        $date.addClass('report-day')
    }


    function addDate (data) {
        var $date = cloneDateModel()

        placeDate($date, data.day)

        $date.find('.name').html(data.name)
        $date.find('.day').html(stringifyDate(data.day))

        return $date
    }


    function placeDate ($date, day) {
        $date.css({
            left : (dateProjectDurationRatio(day) * 100) + '%'
        })
    }


    function stringifyDate (date) {
        return twoDigit(date.getDate()) + '/' + twoDigit(date.getMonth() + 1) + '/' + (date.getYear() - 100)
    } 


    function cloneDateModel () {
        var $date = $('.date.model').clone()
        $date.removeClass('model')

        $('.calendar .container').append($date)

        return $date
    }


    function dateProjectDurationRatio (dateDay) {
        var elapsedTimeInDay = dateElapsedDays(dateDay)
        return elapsedTimeInDay / projectDurationInDay
    }


    function dateElapsedDays (date) {
        var start            = config.calendar[0].day
        var elapsedTimeInMs  = date.getTime() - start.getTime()
        
        return elapsedTimeInMs * msToDay
    }


    function setProjectDaysDuration () {
        var start = config.calendar[0].day
        var end   = config.calendar[config.calendar.length - 1].day

        var elapsedTimeInMs = end.getTime() - start.getTime()

        projectDurationInDay = elapsedTimeInMs * msToDay
    }


    function twoDigit (integer) {
        return (integer > 9) ? integer : '0' + integer
    }



    return {
        set                     : set,
        getProjectDurationInDay : getProjectDurationInDay,
        dateElapsedDays         : dateElapsedDays
    }
})
