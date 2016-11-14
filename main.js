
function getURLParameter (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var group    = getURLParameter('group');
var sprintId = getURLParameter('sprint');


var head   = document.getElementsByTagName('head')[0];
var link   = document.createElement('link');
link.rel   = 'stylesheet';
link.type  = 'text/css';
link.href  = group + '.css';
link.media = 'all';
head.appendChild(link);


require.config({
    paths: {
        jquery: 'scripts/jquery-3.1.1.min',
        config: 'configs/' + group + '/sprint' + sprintId
    }
});

define([
    'jquery',
    'config',
    'scripts/calendar',
    'scripts/big_news',
    'scripts/main_indicators',
    'scripts/main_tasks',
    'scripts/main_risks',
    'scripts/burndown',
    'scripts/jobsPages'
], function ($, config, calendar, setBigNews, setMainIndicators, setMainTasks, setMainRisks, setBurndown, setJobsPages) {
    'use strict'

    $(function () {
        setMainTitle()
        calendar.set()
        setBigNews()
        setMainIndicators()
        setMainTasks()
        setMainRisks()
        setBurndown()
        setJobsPages()
    })


    function setMainTitle () {
        $('.main .container>h1').html(config.projectName + ' - Reporting #' + config.reportIndex)
    }
})
