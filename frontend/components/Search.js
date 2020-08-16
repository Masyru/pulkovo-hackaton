import React from 'react';
import '../assets/style/App.css';
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            current_title: 'Выберите свой поток',
            teacher_title: 'Выберите преподавателя',
        }
    }

    render() {
        let search = this.props.mode === 0 ?
            <div className={'dropdown-btn my-5'}>
                <ButtonGroup>
                   <DropdownButton id="dropdown-basic-button" title={this.state.current_title} variant={'outline-secondary'}>
                       {
                           this.props.groups.map((name, i) => <Dropdown.Item key={i} onClick={() => {
                               this.setState({current_title: name})
                               this.props.filterByGroup(name)
                           }}
                           >{name}</Dropdown.Item>)
                       }
                       <Dropdown.Divider/>
                       <Dropdown.Item onClick={() => {
                           this.setState({current_title: 'Выберите свой поток'})
                           this.props.filterByGroup("Не указано")
                       }}>
                           Не указано
                       </Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>

            </div>
            :
            <div className={'dropdown-btn my-5'}>
                <ButtonGroup>
                    <DropdownButton id="dropdown-basic-button" title={this.state.teacher_title} variant={'outline-secondary'}>
                       {
                           this.props.teachers.map((name, i) => <Dropdown.Item key={i} onClick={() => {
                               this.setState({teacher_title: name})
                               this.props.filterByTeacher(name)
                           }}
                           >{name}</Dropdown.Item>)
                       }
                       <Dropdown.Divider/>
                       <Dropdown.Item onClick={() => {
                           this.setState({teacher_title: 'Выберите преподавателя'})
                           this.props.filterByTeacher("Не указано")
                       }}>
                           Не указано
                       </Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </div>


        return(search)
    }
}