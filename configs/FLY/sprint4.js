define([
], function () {
    'use strict';

    return {
        projectName    : 'FLY',
        reportIndex    : '4 - middle',
        reportDay      : new Date(2016, 10, 14),
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
            totalPoints : 1000,
            states : [
                {
                    date       : new Date(2016, 9, 17),
                    donePoints : 0
                },
                {
                    date       : new Date(2016, 10, 20),
                    donePoints : 150
                }
            ]
        },


        main: {
            bigNews : [
                'Three '
            ],

            indicators : {
                global   : 'meh',
                morals   : 'good',
                quality  : 'good',
                planning : 'meh'
            },

            tasks : [
                {
                    name       : 'Proto 3C',
                    completion : 0.1,
                    indicator  : 'meh'
                },
                {
                    name       : 'Proto graphique',
                    completion : 0.2,
                    indicator  : 'meh'
                },
                {
                    name       : 'Game design documentation',
                    completion : 0.4,
                    indicator  : 'good'
                },
                {
                    name       : 'Sounds placeholders',
                    completion : 0,
                    indicator  : 'meh'
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
                        name       : 'Lotus cars',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Monster concept',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'City modelisation',
                        completion : 0.1,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Probs',
                        completion : 0.33,
                        indicator  : 'good'
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
                        name       : 'physic engine',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Monster behaviors',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'City collisions',
                        completion : 0.1,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Controls',
                        completion : 0.33,
                        indicator  : 'good'
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
                        name       : 'Car controls',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Monster behaviors',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'City level design',
                        completion : 0.1,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Difficulty',
                        completion : 0.33,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/placeholders/gamedesign.jpg'
            },
            {
                title : 'Sound Designers',
                indicators: {
                    global : 'meh'
                },
                tasks : [
                    {
                        name       : 'Car sound effect',
                        completion : 0.2,
                        indicator  : 'meh'
                    },
                    {
                        name       : 'Monster scream',
                        completion : 0.8,
                        indicator  : 'good'
                    },
                    {
                        name       : 'Ambiance',
                        completion : 0.1,
                        indicator  : 'bad'
                    },
                    {
                        name       : 'Explosions',
                        completion : 0.33,
                        indicator  : 'good'
                    }
                ],
                decorationImage: './images/placeholders/sounddesign.jpg'
            }
        ]
    }
});
