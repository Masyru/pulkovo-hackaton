import React from 'react';
import '../assets/style/App.css';
import { InputGroup, Button, DropdownButton, Dropdown, FormControl, ButtonGroup } from "react-bootstrap";

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            current_title: 'Выберите свой поток',
        }
    }

    render() {
        let search = this.props.mode === 0 ?
            <div className={'dropdown-btn my-5'}>
                <ButtonGroup>
                   <DropdownButton id="dropdown-basic-button" title={this.state.current_title} variant={'outline-secondary'}>
                       <Dropdown.Item onClick={() => this.setState({current_title: "Авиационное направление"})}>Авиационное направление</Dropdown.Item>
                       <Dropdown.Item onClick={() => this.setState({current_title: "Инженерное направление"})}>Инженерное направление</Dropdown.Item>
                       <Dropdown.Item onClick={() => this.setState({current_title: "Арт и исскуство"})}>Арт и исскуство</Dropdown.Item>
                       <Dropdown.Divider/>
                       <Dropdown.Item onClick={() => this.setState({current_title: "Выберите свой поток"})}>Не указано</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>

            </div>
            :
            <div className={'searchline my-5'}>
                <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Фамилия преподавателя"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Поиск</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>


        return(search)
    }
}