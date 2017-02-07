define([
], function () {
    'use strict';

    return {
        projectName    : 'Coopsacr',
        reportIndex    : '8 to 9',
        reportDay      : new Date(2017, 1, 6),
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
                }
            ]
        },


        main: {
            bigNews : [
                'Sacrifice mechanics finished'
            ],

            indicators : {
                global   : 'good',
                morals   : 'good',
                quality  : 'good',
                planning : 'bad'
            },

            tasks : [
                {
                    name       : 'Hero',
                    completion : 0.65,
                    indicator  : 'good'
                },
                {
                    name       : 'Enemies',
                    completion : 0.10,
                    indicator  : 'meh'
                },
                {
                    name       : 'Level design',
                    completion : 0.5,
                    indicator  : 'meh'
                },
                {
                    name       : 'Camera',
                    completion : 0.55,
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
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Hero animations',
                        completion : 0.14,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Dog Enemies concept',
                        completion : 0.75,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Humanoid enemies modelisation',
                        completion : 0.90,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Garden environments',
                        completion : 0.8,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/Coopsacr/art8to9.jpg'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Hero behaviors',
                        completion : 0.80,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera',
                        completion : 0.75,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Network',
                        completion : 0.75,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.90,
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
                        name       : 'Scenarisation',
                        completion : 0,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Sacrifice mechanics',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sacrifice justifications',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'V3 Level design in UE',
                        completion : 0.2,
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
                            completion : 0.7,
                            indicator  : 'good'
                        },
                        {
                            name       : 'Musics',
                            completion : 0.25,
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
