define([
], function () {
    'use strict';

    return {
        projectName    : 'FLY',
        reportIndex    : '8 - half',
        reportDay      : new Date(2017, 0, 30),
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
                    completion : 0.25,
                    indicator  : 'meh'
                },
                {
                    name       : 'Camera',
                    completion : 0.4,
                    indicator  : 'good'
                },
                {
                    name       : 'Level design',
                    completion : 0.2,
                    indicator  : 'good'
                },
                {
                    name       : 'plane',
                    completion : 0.4,
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
                    probability : 'Very high',
                    gravity     : 'Medium',
                    solution    : 'Cut boss in multiple part'
                },
                {
                    name        : 'Iteration on complexity',
                    probability : 'Medium',
                    gravity     : 'Very High',
                    solution    : 'Features specification : ASAP, and clear as possible'
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
                        completion : 0.1,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Plane rig',
                        completion : 0.50,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Environnement',
                        completion : 0.33,
                        indicator  : 'good'
                    },
                    {
                        name       : 'UI',
                        completion : 0.2,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/FLY/graph7to8.jpg'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Player controler',
                        completion : 0.86,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Camera\'s systems',
                        completion : 0.5,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Boss behaviors',
                        completion : 0.10,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.5,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/FLY/3C/prog.png'
            },
            {
                title : 'Game Designer',
                indicators: {
                    global : 'bad'
                },
                tasks : [
                    {
                        name       : 'Boss phases/behaviors',
                        completion : 0.8,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.9,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Plane settings',
                        completion : 0.8,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera settings',
                        completion : 0.75,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/FLY/3C/GD.png'
            },
            {
                title : 'Sound Designers',
                indicators: {
                    global : 'good'
                },
                tasks : [
                    {
                        name       : 'Wwise integration',
                        completion : 0.1,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Musics',
                        completion : 0.5,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Sounds effects',
                        completion : 0.2,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Mix',
                        completion : 0.0,
                        indicator  : '-'
                    }
                ],
                decorationImage: './images/placeholders/sounddesign.jpg'
            }
        ]
    }
});
