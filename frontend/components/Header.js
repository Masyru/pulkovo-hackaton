import React from "react";
import "../assets/style/App.css";

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        let header =
            <div className={'header'}>
                <div className={'brand'}>
                    <img src="/frontend/assets/img/monoLOGO.png" alt='Rocketsched' width='55px' height='260px'/>
                </div>
                <div className={'links'}>
                    <a onClick={() => this.props.changeSchedule(0)}>Студенты</a>
                    <a onClick={() => this.props.changeSchedule(1)}>Учителя</a>
                </div>
            </div>

        return(header)
    }
}
