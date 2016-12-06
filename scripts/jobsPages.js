define([
    'jquery',
    'config',
    'scripts/tasks'
], function ($, config, tasks) {
    'use strict'




    /*============================
    =            Page            =
    ============================*/


    function addJobPage (data) {
        var $page = cloneModelPage()

        setPageTitle($page, data)
        addTasks($page, data.tasks)
        addIndicators($page, data.indicators)
        setDecorationImage($page, data)
    }


    function cloneModelPage () {
        var $page = $('.job.page.model').clone()
        $('body').append($page)
        $page.removeClass('model')

        return $page
    }



    /*==================================
    =            Indicators            =
    ==================================*/

    function addIndicators ($page, data) {
        $page.find('.indicators .indicator').addClass(data.global)
    }





    /*==============================
    =            Header            =
    ==============================*/

    function setPageTitle ($page, data) {
        $page.find('>h1').html(data.title)
    }





    /*========================================
    =            Decoration image            =
    ========================================*/

    function setDecorationImage ($page, data) {
        $page.find('img.decoration').attr('src', data.decorationImage)
    }



    /*=============================
    =            Tasks            =
    =============================*/


    function addTasks ($page, tasksData) {
        for (var i = 0; i < tasksData.length; i++) {
            addTask($page, tasksData[i])
        }

        $page.find('.container.model').remove()
    }


    function addTask ($page, taskData) {
        var $parent = $page.find('.tasks')
        var $model  = $parent.find('.container.model')

        tasks.add($model, $parent, taskData)
    }


    return function () {
        for (var i = 0; i < config.jobs.length; i++) {
            addJobPage(config.jobs[i])
        }

        $('.job.page.model').remove()
    }
})