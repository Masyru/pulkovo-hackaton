import React from "react";
import "../assets/style/App.css";

import Header from "./Header";
import SearchLine from "./Search";
import Content from "./Content";

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_window: 0,
            data: [],
        }

        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.changeSchedule = this.changeSchedule.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: [
                {
                    date: [
                        '15.08',
                        '22.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '23.08',
                        '30.08'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                        '31.08',
                        '06.09'
                    ],
                    days: [
                        {
                            date: '15.08',
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
                }
            ]
        })
        // this.getDataFromServer();
    }

    changeSchedule(i){
        this.setState({current_window: i})
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

    render(){
        let app =
            <div className={'schedule'}>
                <Header changeSchedule={this.changeSchedule} />
                <SearchLine mode={this.state.current_window}/>
                <hr className={'first-hr my-4'}/>
                <Content data={this.state.data} mode={this.state.current_window}/>
                <hr className={'first-hr my-4'}/>
            </div>

        return(app)
    }
}
