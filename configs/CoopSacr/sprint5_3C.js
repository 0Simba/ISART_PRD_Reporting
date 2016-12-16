define([
], function () {
    'use strict';

    return {
        projectName    : 'Coopsacr',
        reportIndex    : '5 - 3C',
        reportDay      : new Date(2016, 11, 15),
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
            totalPoints : 812,
            states : [
                {
                    date       : new Date(2016, 9, 17),
                    donePoints : 0
                },
                {
                    date       : new Date(2016, 11, 6),
                    donePoints : 120
                },
                {
                    date       : new Date(2016, 11, 12),
                    donePoints : 252
                },
                {
                    date       : new Date(2016, 11, 16),
                    donePoints : 270
                }
            ]
        },


        main: {
            bigNews : [
                "Lobby works",
                "Player network OK",
                "Garden nearly completed",
                "Paper level design nearly completed"
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
                    completion : 0.25,
                    indicator  : 'good'
                },
                {
                    name       : 'Enemies',
                    completion : 0.01,
                    indicator  : 'meh'
                },
                {
                    name       : 'Level and universe',
                    completion : 0.2,
                    indicator  : 'meh'
                },
                {
                    name       : 'Gameflow',
                    completion : 0.30,
                    indicator  : 'meh'
                }
            ],

            risks : [
                {
                    name        : 'Network',
                    probability : 'Very high',
                    gravity     : 'High',
                    solution    : 'Use UE template. Minimize features which impact network'
                },
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
                        name       : 'Hero',
                        completion : 0.15,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Environments',
                        completion : 0.15,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'UI',
                        completion : 0.07,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Enemies',
                        completion : 0.02,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/Coopsacr/art3C.jpg'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Hero behaviors',
                        completion : 0.5,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera',
                        completion : 0.25,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Network',
                        completion : 0.8, //0.6
                        indicator  : 'good'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.5,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/coopsacr/prog3C.png'
            },
            {
                title : 'Game Designer',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Story boards',
                        completion : 0.45,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sacrifice mechanics',
                        completion : 0.4,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Sacrifice justifications',
                        completion : 0.7,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Balancing',
                        completion : 0,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/Coopsacr/gd3C.png'
            }/*,
            {
                title : 'Sound Designers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Wwise integration',
                        completion : 0.9,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Wwise placeholders',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Musics',
                        completion : 0.5,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sounds effects',
                        completion : 0.05,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/placeholders/sounddesign.jpg'
            }*/
        ]
    }
});
