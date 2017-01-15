define([
], function () {
    'use strict';

    return {
        projectName    : 'Coopsacr',
        reportIndex    : '7 - half',
        reportDay      : new Date(2017, 0, 15),
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
            totalPoints : 844,
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
                },
                {
                    date       : new Date(2016, 11, 25),
                    donePoints : 280
                },
                {
                    date       : new Date(2017, 0, 1),
                    donePoints : 280
                },
                {
                    date       : new Date(2017, 0, 9),
                    donePoints : 307
                },
                {
                    date       : new Date(2017, 0, 15),
                    donePoints : 323
                }
            ]
        },


        main: {
            bigNews : [
                'Hero texturing finished'
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
                    completion : 0.35,
                    indicator  : 'good'
                },
                {
                    name       : 'Enemies',
                    completion : 0.03,
                    indicator  : 'meh'
                },
                {
                    name       : 'Level and universe',
                    completion : 0.5,
                    indicator  : 'meh'
                },
                {
                    name       : 'Gameflow',
                    completion : 0.35,
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
                        name       : 'Hero texturing',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Garden environments',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'UI',
                        completion : 0.07,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Enemies concepts',
                        completion : 0.7,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/Coopsacr/art7half.png'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Hero behaviors',
                        completion : 0.6,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera',
                        completion : 0.25,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Network',
                        completion : 0.7,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.5,
                        indicator  : 'good'
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
                        name       : 'Story boards',
                        completion : 0.25,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Sacrifice mechanics',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sacrifice justifications',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Balancing',
                        completion : 0,
                        indicator  : '-'
                    }
                ],
                decorationImage: './images/Coopsacr/gd3C.png'
            },
                {
                    title : 'Sound Designers',
                    indicators: {
                        global : 'meh'
                    },
                    tasks : [
                        {
                            name       : 'Wwise integration',
                            completion : 0.6,
                            indicator  : 'good'
                        },
                        {
                            name       : 'Musics',
                            completion : 0.1,
                            indicator  : 'bad'
                        },
                        {
                            name       : 'Sounds effects',
                            completion : 0.05,
                            indicator  : 'meh'
                        },
                        {
                            name       : 'Voice over',
                            completion : 0.0,
                            indicator  : '-'
                        }
                    ],
                    decorationImage: './images/Coopsacr/ms/sprint6_to7.jpg'
                }
        ]
    }
});
