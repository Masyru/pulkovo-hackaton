import React from "react";
import "../assets/style/App.css";

import Header from "./Header";
import SearchLine from "./Search";
import Content from "./Content";
import Dialog from "./Schedule";

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_window: 0,
            data: {},
            fetched_data: {},
            schedule: [],
            groups: [],
        }

        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.changeSchedule = this.changeSchedule.bind(this);
        this.showSchedule = this.showSchedule.bind(this);
        this.initTheNameOfGroups = this.initTheNameOfGroups.bind(this);
        this.filterByGroup = this.filterByGroup.bind(this);
    }

    componentDidMount() {
        // this.getDataFromServer();
        // когда буду подключать fetch добавить все в fetch
        const json = {
            weeks: [
                {
                    date: [
                        '15.08',
                        '22.08'
                    ],
                    days: [
                        {
                            date: '15.08',
                            free: false,
                            subjects: [
                                [
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 422,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 120,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 256,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 645,
                                    },

                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 22,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '16.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '17.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '19.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '20.08',
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '21.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '22.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                    ]
                },
                {
                    date: [
                        '15.08',
                        '22.08'
                    ],
                    days: [
                        {
                            date: '15.08',
                            free: false,
                            subjects: [
                                [
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 422,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 120,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 256,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 645,
                                    },

                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 22,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '16.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '17.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '19.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '20.08',
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '21.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '22.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                    ]
                },
                {
                    date: [
                        '15.08',
                        '22.08'
                    ],
                    days: [
                        {
                            date: '15.08',
                            free: false,
                            subjects: [
                                [
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 422,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 120,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 256,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 645,
                                    },

                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 22,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '16.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '17.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '19.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '20.08',
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '21.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '22.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                    ]
                },
                {
                    date: [
                        '15.08',
                        '22.08'
                    ],
                    days: [
                        {
                            date: '15.08',
                            free: false,
                            subjects: [
                                [
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 422,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 120,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 256,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 645,
                                    },

                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 22,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '16.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '17.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '19.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '20.08',
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '21.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '22.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                    ]
                },
                {
                    date: [
                        '15.08',
                        '22.08'
                    ],
                    days: [
                        {
                            date: '15.08',
                            free: false,
                            subjects: [
                                [
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 422,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 120,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Алексеев И.М.',
                                        theme: 'Введение в безопаность данных',
                                        group: 'Администрирование систем linux',
                                        aud: 256,
                                    },
                                    {
                                        teacher: 'Николаева А.М.',
                                        theme: 'Углубленный курс Python',
                                        group: 'Алгоритмы и статистика',
                                        aud: 645,
                                    },

                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 22,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 302,
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg',
                                        aud: 402,
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '16.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '17.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '19.08',
                            free: false,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '20.08',
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '21.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                        {
                            date: '22.08',
                            free: true,
                            sections: [
                                'Ssdfsd fsdfsdfsd ds',
                                'sdfsdfsd sdfsdffgh ffghfgh',
                                'dfgdf gdfg dfgdfgdfg dgdfg',
                                'jghj ghjgjdsfgs sdfsdfsdf'
                            ],
                            teachers: [
                                'sdfsdfsd rthrt rthrth ',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf',
                                'sdfsdfsdf dsfsdfsd dsfsdf',
                                'sdfsdf sdfsdfsdf sdfsdf'
                            ],
                            subjects: [
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ],
                                [
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                    {
                                        teacher: 'Sdfsdfsdf A.F',
                                        theme: 'svsvsdv sdvsdvsdf',
                                        group: 'dfgdfdfd fvdfdfg ddfgdfgfdggg'
                                    },
                                ]
                            ]
                        },
                    ]
                },
            ],
            current_date: ['15.08', '22.08']
        }
        this.setState({
            fetched_data: json,
            data: json
        })
        this.initTheNameOfGroups(json)
    }

    changeSchedule(i){
        this.setState({current_window: i})
    }

    showSchedule(data){
        this.setState({
            schedule: data,
        })
    }

    getDataFromServer(){
        const _this = this;
        fetch('/schedule',
	        {
	          method: 'get',
	          headers: {
	            'Content-Type':'application/json',
	            "Access-Control-Allow-Origin": "*",
	            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
	          },
	        })
	        .then(
	        function(response) {
                  if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        if(response.status === 500){
                            console.log("Status: 500")
                        }
                        return;
                  }

                  // Examine the text in the response
                  response.json()
                        .then(function(data) {
                            if (data !== null && data.length){
                                _this.setState({
                                    data: data,
                                })
                            }
                        });
	        }).catch(function (error) {
  			        console.log('error: ', error)
  					_this.setState({error: true})
  			  })
    }

    initTheNameOfGroups(arr){
        if (arr.weeks !== undefined && arr.weeks !== null){
            let groups = []
            arr.weeks.forEach(item => {
                item.days.forEach(day => {
                    day.subjects.forEach(sub => {
                        sub.forEach(section => {
                            if (!groups.includes(section.group)){
                                groups.push(section.group)
                            }
                        })
                    })
                })
            })
            this.setState({groups: groups})
        }
    }

    filterByGroup(name){
        // Не работает "Uncaught TypeError: arr.weeks[i].days[j] is undefined"





        if(name === 'Не указано'){
            this.setState({data: this.state.fetched_data})
        } else {
            let arr = this.state.data;
            for (let i = 0; i < arr.weeks.length; i++) {
                for (let j = 0; i < arr.weeks[i].days.length; j++){
                    console.log(arr.weeks[i].days[j])
                    let a = arr.weeks[i].days[j].subjects.filter(obj => console.log(obj))
                    console.log(a)
                }
            }
            this.setState({data: arr})
        }
    }

    render(){

        let app =
            <>
                <Header changeSchedule={this.changeSchedule} />
                <SearchLine mode={this.state.current_window} groups={this.state.groups} filterByGroup={this.filterByGroup}/>
                <hr className={'first-hr my-4'}/>
                <Content data={this.state.data} mode={this.state.current_window} showSchedule={this.showSchedule}/>
                <hr className={'first-hr my-4'}/>
                <Dialog
                    show={this.state.schedule.subjects !== undefined && this.state.schedule.subjects !== null && this.state.schedule.subjects.length}
                    schedule={this.state.schedule.subjects}
                    onHide={() => this.showSchedule([])}
                />
            </>

        return(app)
    }
}
