import React from "react";
import '../assets/style/App.css';
import {Heading, Text, Divider} from '@adobe/react-spectrum'


class ScheduleCards extends React.Component {
    render() {

        let cards =
                    this.props.data.map((obj, i) =>
                        <div className={'cards-item'} key={i}>
                                <div className="auditory">
                                    <Heading level={1}>{obj.aud}</Heading>
                                </div>
                                <div className="topic">
                                    <Heading level={3}>{obj.teacher}</Heading>
                                    <Text>Тема: {obj.theme}</Text>
                                    <Divider size="M"/>
                                    <Text>Профиль: {obj.group} - Группа: {obj.id}</Text>
                                </div>
                        </div>
                    );


        return(cards)
    }
}


export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentClass: 0,
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            show: nextProps.show,
        })
        if (nextProps.show){
            document.getElementsByTagName('html')[0].style = 'overflow: hidden';
        } else {
            document.getElementsByTagName('html')[0].style = '';
        }
    }

    render() {
        const arrPages = this.props.schedule !== undefined && this.props.schedule.length
            ? this.props.schedule.map((data, i) => <ScheduleCards key={i} data={data}/>)
            : [];

        let dialog =
            <div className={`schedule${this.props.show ? ' active': ''}`}
                 onClick={this.props.onHide}>
                <div className={`schedule-content${this.props.show ? ' active': ''}`} onClick={event => event.stopPropagation()}>
                    <div className={'for-close-btn'}>
                        <Heading level={2}>Расписание</Heading>
                        <img src="/frontend/assets/img/Close.svg"
                             alt="Закрыть"
                             onClick={() => this.props.onHide()}
                             width='30px'
                             height='30px'
                             style={{
                                 cursor: 'pointer',
                                 margin: '10px 10px 0 auto'
                             }}
                        />
                    </div>
                    <div className={'content'}>
                        <div className="slide-menu">
                            <div className={`item${this.state.currentClass === 0 ? ' active' : ''}`} onClick={() => this.setState({currentClass: 0})}>1 пара</div>
                            <div className={`item${this.state.currentClass === 1 ? ' active' : ''}`} onClick={() => this.setState({currentClass: 1})}>2 пара</div>
                            <div className={`item${this.state.currentClass === 2 ? ' active' : ''}`} onClick={() => this.setState({currentClass: 2})}>3 пара</div>
                            <div className={`item${this.state.currentClass === 3 ? ' active' : ''}`} onClick={() => this.setState({currentClass: 3})}>4 пара</div>
                        </div>
                        <div className="arrange-cards">
                            {
                                arrPages.length ? arrPages[this.state.currentClass] : <div className={'free-day'}>Выходной день</div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        return(dialog);
    }
}

