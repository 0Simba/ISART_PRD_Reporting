define([
], function () {
    'use strict';

    return {
        projectName    : 'FLY',
        reportIndex    : '5 - 3C',
        reportDay      : new Date(2016, 11, 6),
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
            totalPoints : 408,
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
                    donePoints : 45
                }
            ]
        },


        main: {
            bigNews : [
                'Boss defined',
                'Plane modelisation finished'
            ],

            indicators : {
                global   : 'meh',
                morals   : 'meh',
                quality  : 'good',
                planning : 'bad'
            },

            tasks : [
                {
                    name       : 'Titanic boss',
                    completion : 0.05,
                    indicator  : 'meh'
                },
                {
                    name       : 'Camera',
                    completion : 0.5,
                    indicator  : 'good'
                },
                {
                    name       : 'Universe',
                    completion : 0.2,
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
                    probability : 4,
                    gravity     : 5,
                    solution    : 'Allow very high time on polish, minimize features quantities'
                },
                {
                    name        : 'Boss size',
                    probability : 5,
                    gravity     : 3,
                    solution    : 'Cut boss in multiple part'
                },
                {
                    name        : 'Iteration on complexity',
                    probability : 3,
                    gravity     : 5,
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
                        name       : 'Boss parts concepts',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Plane',
                        completion : 0.9,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Probs',
                        completion : 0.15,
                        indicator  : 'good'
                    },
                    {
                        name       : 'UI',
                        completion : 0,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/placeholders/gameart.jpg'
            },
            {
                title : 'Programmers',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Plane controls',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Camera\'s systems',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'World interaction',
                        completion : 0,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Gameflow',
                        completion : 0,
                        indicator  : 'meh'
                    }
                ],
                decorationImage: './images/placeholders/programming.jpg'
            },
            {
                title : 'Game Designer',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Boss/plane interactions',
                        completion : 0.1,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Defining boss behaviors',
                        completion : 0.05,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Plane settings',
                        completion : 0.1,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Camera settings',
                        completion : 0.33,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/placeholders/gamedesign.jpg'
            },
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
            }
        ]
    }
});
