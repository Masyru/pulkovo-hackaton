import React from "react";
import "../assets/style/App.css";
import "../assets/style/Admin.css";
import Header from "./Header";
import Content from "./Content";
import Dialog from "./Schedule";
import { Provider, Form, TextField } from "@adobe/react-spectrum";

export default class extends React.Component{
    render(){
        let login =
            <Provider colorScheme="light" className={'login-react'}>
                <Form maxWidth="size-3600">
                  <TextField label="Email" placeholder="abc@adobe.com" />
                  <TextField label="Password" placeholder="1234" />
                </Form>
            </Provider>


        let admin =
            <>
                <Header changeSchedule={this.changeSchedule} />
                <hr className={'first-hr my-4'}/>
                <Content data={this.state.data} mode={this.state.current_window} showSchedule={this.showSchedule}/>
                <hr className={'first-hr my-4'}/>
                <Dialog
                    show={this.state.schedule.subjects !== undefined && this.state.schedule.subjects !== null && this.state.schedule.subjects.length}
                    schedule={this.state.schedule.subjects}
                    onHide={() => this.showSchedule([])}
                />
            </>

        return(login)
    }
}