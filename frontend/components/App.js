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
            teachers: []
        }

        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.changeSchedule = this.changeSchedule.bind(this);
        this.showSchedule = this.showSchedule.bind(this);
        this.initTheNameOfGroups = this.initTheNameOfGroups.bind(this);
        this.initBySurname = this.initBySurname.bind(this);
    }

    componentDidMount() {
        this.getDataFromServer();
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
                            if (data !== null && data.weeks.length){
                                _this.setState({
                                    data: data,
                                    fetched_data: data,
                                })
                                _this.initTheNameOfGroups(data);
                                _this.initBySurname(data);
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
                    if (!day.free){
                        day.subjects.forEach(sub => {
                            sub.forEach(section => {
                                if (!groups.includes(section.group)){
                                    groups.push(section.group)
                                }
                            })
                        })
                    }
                })
            })
            this.setState({groups: groups})
        }
    }

    initBySurname(arr){
        if (arr.weeks !== undefined && arr.weeks !== null){
            let teachers = []
            arr.weeks.forEach(item => {
                item.days.forEach(day => {
                    if (!day.free){
                        day.subjects.forEach(sub => {
                            sub.forEach(section => {
                                if (!teachers.includes(section.teacher)){
                                    teachers.push(section.group)
                                }
                            })
                        })
                    }
                })
            })
            this.setState({teachers: teachers})
        }
    }

    render(){

        let app =
            <>
                <Header changeSchedule={this.changeSchedule} />
                {/*<SearchLine*/}
                {/*    mode={this.state.current_window}*/}
                {/*    groups={this.state.groups}*/}
                {/*    teachers={this.state.teachers}*/}
                {/*/>*/}
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
