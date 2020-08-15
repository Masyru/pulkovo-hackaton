import React from "react";
import "../assets/style/App.css";

import ContentRow from "./ContentRow";

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            arr: this.props.data,
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            arr: nextProps.data,
        })
    }

    render(){
        const arr = this.state.arr;

        let content = this.props.mode ?
            null
            :
            <div className={'content my-3'}>
                {
                    arr !== null && arr.weeks !== undefined && arr.weeks.length ?
                        arr.weeks.map((obj, i) =>
                            <ContentRow data={obj} key={i} num={i} showSchedule={this.props.showSchedule}/>
                        ) :
                        <div className={'loading'}>
                            Loading
                        </div>
                }
            </div>;

        return(content)
    }
}