define([
], function () {
    'use strict';

    return {
        projectName    : 'FLY',
        reportIndex    : '15 end',
        reportDay      : new Date(2017, 4, 15),
        sprintDuration : 14,
        calendar       : [
            {
                day:  new Date(2016, 9, 17),
                name: 'Start'
            },
            {
                day:  new Date(2016, 10, 3),
                name: 'Concept'
            },
            {
                day:  new Date(2016, 11, 16),
                name: '3C'
            },
            {
                day:  new Date(2017, 1, 23),
                name: 'Alpha'
            },
            {
                day:  new Date(2017, 3, 21),
                name: 'Beta'
            },
            {
                day:  new Date(2017, 4, 19),
                name: 'Gold'
            },
            {
                day:  new Date(2017, 5, 16),
                name: 'Jury'
            },
        ],


        burndown : {
            totalPoints : 100,
            states : [
                {
                    date       : new Date(2016, 9, 17),
                    donePoints : 0
                },
                {
                    date       : new Date(2016, 10, 28),
                    donePoints : 6.6
                },
                {
                    date       : new Date(2016, 11, 6),
                    donePoints : 6.6
                },
                {
                    date       : new Date(2016, 11, 12),
                    donePoints : 6.6
                },
                {
                    date       : new Date(2016, 11, 16),
                    donePoints : 16.5
                },
                {
                    date       : new Date(2016, 11, 25),
                    donePoints : 16.5
                },
                {
                    date       : new Date(2017, 0, 1),
                    donePoints : 17.1
                },
                {
                    date       : new Date(2017, 0, 9),
                    donePoints : 25.2
                },
                {
                    date       : new Date(2017, 0, 15),
                    donePoints : 28.5
                },
                {
                    date       : new Date(2017, 0, 24),
                    donePoints : 25.7
                },
                {
                    date       : new Date(2017, 0, 30),
                    donePoints : 25.7
                },
                {
                    date       : new Date(2017, 1, 6),
                    donePoints : 31.4
                },
                {
                    date       : new Date(2017, 1, 13),
                    donePoints : 38.6
                },
                {
                    date       : new Date(2017, 1, 20),
                    donePoints : 41.40
                },
                {
                    date       : new Date(2017, 1, 27),
                    donePoints : 42.8
                },
                {
                    date       : new Date(2017, 2, 6),
                    donePoints : 42.8
                },
                {
                    date       : new Date(2017, 2, 13),
                    donePoints : 42.8
                },
                {
                    date       : new Date(2017, 2, 20),
                    donePoints : 52.9
                },
                {
                    date       : new Date(2017, 2, 27),
                    donePoints : 53.6
                },
                {
                    date       : new Date(2017, 3, 3),
                    donePoints : 53.6
                },
                {
                    date       : new Date(2017, 3, 10),
                    donePoints : 53.6
                },
                {
                    date       : new Date(2017, 3, 18),
                    donePoints : 53.6
                },
                {
                    date       : new Date(2017, 3, 24),
                    donePoints : 61
                },
                {
                    date       : new Date(2017, 4, 2),
                    donePoints : 63.6
                },
                {
                    date       : new Date(2017, 4, 8),
                    donePoints : 70
                },
                {
                    date       : new Date(2017, 4, 8),
                    donePoints : 70.4
                }
            ]
        },


        main: {
            bigNews : [
                "Scope reduced",
                "You only have to shoot weak points"
            ],

            indicators : {
                global   : 'meh',
                morals   : 'meh',
                quality  : 'meh',
                planning : 'bad'
            },

            tasks : [
                {
                    name       : 'Boss animations',
                    completion : 0.6,
                    indicator  : 'bad'
                },
                {
                    name       : 'Environment design',
                    completion : 0.8,
                    indicator  : 'bad'
                },
                {
                    name       : 'Cinematics',
                    completion : 0.55,
                    indicator  : 'bad'
                },
                {
                    name       : 'Boss cannons',
                    completion : 0.5,
                    indicator  : 'bad'
                }
            ],

            risks : [
                {
                    name        : 'Plane and monster not well polished',
                    probability : 'Very high',
                    gravity     : 'Very high',
                    solution    : 'Allow very high time on polish, minimize features quantities'
                },
                {
                    name        : 'Boss size',
                    probability : 'High',
                    gravity     : 'Medium',
                    solution    : 'Cut boss in multiple part'
                }
            ]
        },


        jobs : [
            {
                title : 'Graphic Artist',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Boss modules',
                        completion : 0.85,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Plane & FX',
                        completion : 0.80,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'UI - menus',
                        completion : 1,
                        indicator  : '-'
                    }
                ],
                decorationImage: './images/FLY/graph10.png'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Canon à mine',
                        completion : 0.0,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Polish',
                        completion : 0.2,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Menus',
                        completion : 0.85,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/FLY/3C/prog.png'
            },
            {
                title : 'Game Designer',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Cinematics placeholder',
                        completion : 0.8,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Plane settings & tests',
                        completion : 0.9,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera settings & tests',
                        completion : 0.8,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/FLY/gd10.png'
            },
            {
                title : 'Sound Designers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Wwise integration',
                        completion : 0.80,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Musics',
                        completion : 0.9,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sounds effects',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Mix',
                        completion : 0.7,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/placeholders/sounddesign.jpg'
            }
        ]
    }
});

