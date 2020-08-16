import React from "react";
import "../assets/style/App.css";

import ContentRow from "./ContentRow";
import { Spinner } from 'react-bootstrap';

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

        let content =
            <div className={'content my-3'}>
                {
                    arr !== null && arr.weeks !== undefined && arr.weeks.length ?
                        arr.weeks.map((obj, i) =>
                            <ContentRow data={obj} key={i} num={i} showSchedule={this.props.showSchedule}/>
                        ) :
                        <div className={'loading'} style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Spinner animation="border" />
                        </div>
                }
            </div>;

        return(content)
    }
}