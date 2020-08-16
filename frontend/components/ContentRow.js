import React from "react";
import "../assets/style/App.css";
import { Row } from "react-bootstrap";

class Card extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        let card =
            <div className={`card${this.props.data.free ? " free" : ""}`}
                 onClick={() => this.props.showSchedule(this.props.data)}
            >
                <h3>{this.props.header}</h3>
            </div>

        return(this.props.day === 6 ? null : card)
    }
}


class Calendar extends React.Component{
    render() {
        let calendar =
            <div className={`calendar${this.props.active ? ' active' : ''}`}>
                <Row>
                    {
                        this.props.days !== null && this.props.days.length ?
                            this.props.days.map((obj, i) =>
                                <Card data={obj} key={i} day={i}
                                      header={(
                                          function(){
                                            switch (i){
                                                case 0:
                                                    return 'Понедельник'
                                                case 1:
                                                    return 'Вторник'
                                                case 2:
                                                    return 'Среда'
                                                case 3:
                                                    return 'Четверг'
                                                case 4:
                                                    return 'Пятница'
                                                case 5:
                                                    return 'Суббота'
                                                case 6:
                                                    return 'Воскресенье'
                                            }
                                      })()}
                                      showSchedule={this.props.showSchedule}
                                />
                            )
                            :
                            null
                    }
                </Row>
            </div>

        return(calendar)
    }
}


export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }

        this.countingWorkDays = this.countingWorkDays.bind(this);
    }

    countingWorkDays(array){
        let count = 0
        array.forEach((obj, i) => {
            if (obj.free === false && i !== 6){
                count += 1
            }
        })
        switch (count){
            case 0:
                return 'Каникулы'
            case 1:
                return `${count} учебный день`
            case 2:
                return `${count} учебных дня`
            case 3:
                return `${count} учебных дня`
            case 4:
                return `${count} учебных дня`
            case 5:
                return `${count} учебных дней`
            case 6:
                return `${count} учебных дней`
            case 7:
                return `${count} учебных дней`
            default:
                return 'Неизвестно учебных дней'
        }
    }

    render(){

        const obj = this.props.data
        let row =
            <div className={'calendar-row my-3'}>
                  <div className={`widget-row my-2`}  id={`${this.props.num}`} onClick={() => {
                            this.setState({active: !this.state.active})
                            document.getElementById(this.props.num).style.height = this.state.active ? '100px' : '350px';
                  }}>
                      <div style={{display: 'flex'}}>
                          <div className={'sequence'}>
                            {this.props.num + 1}<span>неделя</span>
                          </div>
                          <div className={'block'}>
                              <div className={'date'}>
                                {obj.date[0]} - {obj.date[1]}
                              </div>
                              <div className={'work-days'}>
                                {
                                    this.countingWorkDays(obj.days)
                                }
                              </div>
                          </div>
                      </div>

                      <Calendar
                          days={obj.days}
                          active={this.state.active}
                          showSchedule={this.props.showSchedule}
                      />
                  </div>
            </div>


        return(row)
    }
}
