define([
], function () {
    'use strict';

    function configure ($task, data) {
        $task.find('.name').html(data.name)
        $task.find('.indicator').addClass(data.indicator)
        $task.find('.fill').css({
            width : (data.completion * 100) + '%'
        })
    }


    function clone ($model, $parent) {
        var $task = $model.clone()
        $task.removeClass('model')

        $parent.append($task)

        return $task
    }


    function add ($model, $parent, data) {
        var $task = clone($model, $parent)
        configure($task, data)
    }


    return {
        add : add
    }
});