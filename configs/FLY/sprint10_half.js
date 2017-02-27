define([
], function () {
    'use strict';

    return {
        projectName    : 'FLY',
        reportIndex    : '10 half',
        reportDay      : new Date(2017, 1, 27),
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
                }
            ]
        },


        main: {
            bigNews : [
            ],

            indicators : {
                global   : 'meh',
                morals   : 'meh',
                quality  : 'meh',
                planning : 'bad'
            },

            tasks : [
                {
                    name       : 'Titanic boss',
                    completion : 0.46,
                    indicator  : 'meh'
                },
                {
                    name       : 'Camera',
                    completion : 0.95,
                    indicator  : 'meh'
                },
                {
                    name       : 'Level design',
                    completion : 0.35,
                    indicator  : 'bad'
                },
                {
                    name       : 'plane',
                    completion : 0.6,
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
                    name        : 'Iteration on complexity',
                    probability : 'High',
                    gravity     : 'Very High',
                    solution    : 'Features specification : ASAP, and clear as possible'
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
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Boss Modelisation',
                        completion : 0.7,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Plane',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Environnement',
                        completion : 0.4,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'UI',
                        completion : 0.2,
                        indicator  : 'good'
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
                        name       : 'Player controler',
                        completion : 1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Camera\'s systems',
                        completion : 0.75,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Boss behaviors',
                        completion : 0.33,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.7,
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
                        name       : 'Tests boss phases',
                        completion : 0.1,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Gamefeel',
                        completion : 0.05,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Plane settings & tests',
                        completion : 0.8,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera settings & tests',
                        completion : 0.5,
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
                        completion : 0.3,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Musics',
                        completion : 0.6,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sounds effects',
                        completion : 0.5,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Mix',
                        completion : 0.4,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/placeholders/sounddesign.jpg'
            }
        ]
    }
});
