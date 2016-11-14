define([
    'jquery',
    'config',
    'scripts/tasks'
], function ($, config, tasks) {
    'use strict'


    function setMainTasks () {
        for (var i = 0; i < config.main.tasks.length; i++) {
            addTask(config.main.tasks[i])
        }

        $('.main .tasks .container.model').remove()
    }


    function addTask (data) {
        var $model  = $('.main .tasks .container.model')
        var $parent = $('.main .tasks')

        tasks.add($model, $parent, data)
    }


    return setMainTasks
})