define([
    'jquery',
    'scripts/d3.min',
    'config',
    'scripts/calendar'
], function ($, d3, config, calendar) {
    'use strict'

    var svg     = d3.select("#visualisation")
    var width   = $('.page.burndown .chart').width()
    var height  = $('.page.burndown .chart').height()
    var margins = {
        top    : 50,
        right  : 50,
        bottom : 50,
        left   : 80
    }

    var lineDataActual = convertStatesToChartData(config.burndown.states)

    var xTicksValues = []
    var xMin         = 0
    var xMax         = 0
    var yMin         = 0
    var yMax         = 0
    var xRange
    var yRange

    var lineFunc = d3.svg.line()

    lineFunc.x(function (d) {
        return xRange(d.x);
    })

    lineFunc.y(function (d) {
        return yRange(d.y);
    })

    lineFunc.interpolate();


    function setChartValues () {
        var xLimit = [xMin, xMax]
        var yLimit = [yMin, yMax]


        xRange = d3.scale.linear().range([margins.left,  width - margins.right]).domain(xLimit)
        yRange = d3.scale.linear().range([height - margins.top, margins.bottom]).domain(yLimit)
    }


    function setChartLimits () {
        xMin = 0
        xMax = calendar.getProjectDurationInDay()
        yMin = 0
        yMax = config.burndown.totalPoints
    }


    function setXTicksValues () {
        var ticksNumber       = Math.ceil(calendar.getProjectDurationInDay() / config.sprintDuration)

        for (var i = 0; i < ticksNumber; i++) {
            xTicksValues.push(i * config.sprintDuration)
        }
    }


    function makeXAxis () {
        return d3.svg.axis().scale(xRange).orient("bottom").tickValues(xTicksValues);
    }

    
    function makeYAxis () {
        return d3.svg.axis().scale(yRange).orient("left").tickSubdivide(true)
    }


    function setHorizontalGridLines () {
        var tickWidth = -width + margins.right + margins.left;
        var offset    = {
            x : margins.left,
            y : 0
        }

        setGridLines(offset, tickWidth, makeYAxis)
    }


    function setVerticalGridLines () {
        var tickHeight = -height + margins.top + margins.bottom
        var offset     = {
            x : 0,
            y : height - margins.top
        }

        setGridLines(offset, tickHeight, makeXAxis)
    }


    function setGridLines (offset, tickSize, maker) {
        var g = svg.append("g")
        g.attr("class", "grid")

        addOffsetOn(g, offset)

        var setter = maker().tickSize(tickSize, 0, 0).tickFormat("")
        g.call(setter)
    }


    function setAxis () {
        addXAxis()
        addYAxis()
    }


    function addXAxis () {
        var xAxisSetter  = d3.svg.axis().scale(xRange).tickValues(xTicksValues)
        var offset = {
            x : 0,
            y : height - (margins.bottom)
        }

        addAxis('x', xAxisSetter, offset)
    }


    function addYAxis () {
        var yAxisSetter  = d3.svg.axis().scale(yRange).orient("left").tickSubdivide(true)
        var offset = {
            x : margins.left,
            y : 0
        }

        addAxis('y', yAxisSetter, offset)
    }


    function addAxis (axisLetter, setter, offset) {
        var g = svg.append("svg:g")
        g.attr("class", axisLetter + " axis")

        addOffsetOn(g, offset)

        g.call(setter);
    }


    function addOffsetOn (svgElement, offset) {
        svgElement.attr("transform", "translate(" + offset.x + ", " + offset.y + ")")

    }


    function addIdealLine () {
        var lineDataIdeal = [{
            'x': xMin,
            'y': yMax
        }, {
            'x': xMax,
            'y': yMin   
        }];

        addLine(lineDataIdeal, 'ideal')
    }


    function addLine (data, cssClass) {
        var line = svg.append("svg:path")
        line.attr("d", lineFunc(data))
        line.attr("class", cssClass);
    }


    function addAbcissText (text) {
        var abcissText = svg.append("text")
        abcissText.attr("class", "x label")
        abcissText.attr("text-anchor", "end")
        abcissText.attr("x", width)
        abcissText.attr("y", height -6)
        abcissText.text(text);
    }


    function addOrdinateText (text) {
        var ordinateText = svg.append("text")
        ordinateText.attr("class", "y label")
        ordinateText.attr("text-anchor", "end")
        ordinateText.attr("y", 6)
        ordinateText.attr("dy", ".75em")
        ordinateText.attr("transform", "rotate(-90)")
        ordinateText.text(text);
    }


    function convertStatesToChartData (states) {
        var data = []

        for (var i = 0; i < states.length; i++) {
            var state = states[i]

            data.push({
                x : calendar.dateElapsedDays(state.date) | 0,
                y : (config.burndown.totalPoints - state.donePoints)
            })
        }

        return data
    }


    return function () {
        setChartLimits()
        setChartValues()   
        setXTicksValues()
        setVerticalGridLines()
        setHorizontalGridLines()
        setAxis()
        addIdealLine()
        addLine(lineDataActual, 'actual')
        addAbcissText('Elapsed days')
        addOrdinateText('Rest in percent')
    }

})