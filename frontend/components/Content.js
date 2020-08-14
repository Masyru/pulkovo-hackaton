import React from "react";
import "../assets/style/App.css";

import ContentRow from "./ContentRow";

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        let content = this.props.mode ?
            null
            :
            <div className={'content my-3'}>
                {
                    this.props.data !== null && this.props.data.length ?
                        this.props.data.map((obj, i) =>
                            <ContentRow data={obj} key={i} num={i}/>
                        ) :
                        <div className={'loading'}>
                            Loading
                        </div>
                }
            </div>;

        return(content)
    }
}