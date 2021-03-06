define([
], function () {
    'use strict';

    return {
        projectName    : 'Coopsacr',
        reportIndex    : '14 to 15',
        reportDay      : new Date(2017, 4, 2),
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
            }
        ],


        burndown : {
            totalPoints : 100,
            states : [
                {
                    date       : new Date(2016, 9, 17),
                    donePoints : 0
                },
                {
                    date       : new Date(2016, 11, 6),
                    donePoints : 14.2
                },
                {
                    date       : new Date(2016, 11, 12),
                    donePoints : 29.9
                },
                {
                    date       : new Date(2016, 11, 16),
                    donePoints : 32.0
                },
                {
                    date       : new Date(2016, 11, 25),
                    donePoints : 33.2
                },
                {
                    date       : new Date(2017, 0, 1),
                    donePoints : 33.2
                },
                {
                    date       : new Date(2017, 0, 9),
                    donePoints : 36.4
                },
                {
                    date       : new Date(2017, 0, 15),
                    donePoints : 29.3
                },
                {
                    date       : new Date(2017, 0, 30),
                    donePoints : 29.3
                },
                {
                    date       : new Date(2017, 1, 6),
                    donePoints : 30.7
                },
                {
                    date       : new Date(2017, 1, 8),
                    donePoints : 35
                },
                {
                    date       : new Date(2017, 1, 13),
                    donePoints : 37.9
                },
                {
                    date       : new Date(2017, 1, 20),
                    donePoints : 41.4
                },
                {
                    date       : new Date(2017, 1, 27),
                    donePoints : 42.9
                },
                {
                    date       : new Date(2017, 2, 6),
                    donePoints : 42.1
                },
                {
                    date       : new Date(2017, 2, 13),
                    donePoints : 42.1
                },
                {
                    date       : new Date(2017, 2, 20),
                    donePoints : 59.3
                },
                {
                    date       : new Date(2017, 2, 27),
                    donePoints : 60.7
                },
                {
                    date       : new Date(2017, 3, 3),
                    donePoints : 60.7
                },
                {
                    date       : new Date(2017, 3, 10),
                    donePoints : 60.7
                },
                {
                    date       : new Date(2017, 3, 18),
                    donePoints : 67.9
                },
                {
                    date       : new Date(2017, 3, 24),
                    donePoints : 68
                },
                {
                    date       : new Date(2017, 4, 3),
                    donePoints : 69
                }
            ]
        },


        main: {
            bigNews : [
                "Lou joined the team (MS)"
            ],

            indicators : {
                global   : 'good',
                morals   : 'good',
                quality  : 'good',
                planning : 'meh'
            },

            tasks : [
                {
                    name       : 'Hero',
                    completion : 0.83,
                    indicator  : 'good'
                },
                {
                    name       : 'Enemies',
                    completion : 0.95,
                    indicator  : 'meh'
                },
                {
                    name       : 'Level design',
                    completion : 0.73,
                    indicator  : 'meh'
                },
                {
                    name       : 'Camera',
                    completion : 0.56,
                    indicator  : 'meh'
                }
            ],

            risks : [
                {
                    name        : 'Git + unreal',
                    probability : "High",
                    gravity     : "High",
                    solution    : 'Establish process. Verify everyone respect these process'
                },
                {
                    name        : 'Graphic optimization',
                    probability : "High",
                    gravity     : "High",
                    solution    : 'Pipeline anticipation'
                },
                {
                    name        : 'Annoying sacrifices',
                    probability : 'Low',
                    gravity     : 'Very high',
                    solution    : 'Lot of tests'
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
                        name       : 'Hero animations',
                        completion : 0.95,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Humanoid texturing',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'All environments',
                        completion : 0.6,
                        indicator  : 'bad'
                    }
                ],
                decorationImage: './images/Coopsacr/art13to14.png'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Camera',
                        completion : 0.80,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'IA',
                        completion : 0.85,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Polish/integration',
                        completion : 0.2,
                        indicator  : 'bad'
                    }
                ],
                decorationImage: './images/Coopsacr/prog6to7.png'
            },
            {
                title : 'Game Designer',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Enemies spawns integration',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Balancing',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'FTUE',
                        completion : 0.05,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Scenarisation',
                        completion : 0.5,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/Coopsacr/gd8to9.png'
            },
            {
                title : 'Sound Designers',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Wwise integration',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Musics',
                        completion : 0.65,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sounds effects',
                        completion : 0.6,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Voice over',
                        completion : 0.1,
                        indicator  : '-'
                    }
                ],
                decorationImage: './images/Coopsacr/ms/sprint6_to7.jpg'
            }
        ]
    }
});
