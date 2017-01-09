define([
], function () {
    'use strict';

    return {
        projectName    : 'FLY',
        reportIndex    : '6 to 7',
        reportDay      : new Date(2017, 0, 9),
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
            totalPoints : 527,
            states : [
                {
                    date       : new Date(2016, 9, 17),
                    donePoints : 0
                },
                {
                    date       : new Date(2016, 10, 28),
                    donePoints : 35
                },
                {
                    date       : new Date(2016, 11, 6),
                    donePoints : 35
                },
                {
                    date       : new Date(2016, 11, 12),
                    donePoints : 35
                },
                {
                    date       : new Date(2016, 11, 16),
                    donePoints : 87
                },
                {
                    date       : new Date(2016, 11, 25),
                    donePoints : 87
                },
                {
                    date       : new Date(2017, 0, 1),
                    donePoints : 90
                },
                {
                    date       : new Date(2017, 0, 9),
                    donePoints : 138
                }
            ]
        },


        main: {
            bigNews : [
                'Boss parts concepts finished'
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
                    completion : 0.1,
                    indicator  : 'meh'
                },
                {
                    name       : 'Camera',
                    completion : 0.5,
                    indicator  : 'good'
                },
                {
                    name       : 'Universe',
                    completion : 0.4,
                    indicator  : 'good'
                },
                {
                    name       : 'Gameflow',
                    completion : 0,
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
                        completion : 0.075,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Plane',
                        completion : 0.9,
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
                decorationImage: './images/FLY/art6to7.jpg'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Player controler',
                        completion : 0.75,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Camera\'s systems',
                        completion : 0.5,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Boss bootstrap',
                        completion : 0,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0.1,
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
                        completion : 0.5,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera settings',
                        completion : 0.7,
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
