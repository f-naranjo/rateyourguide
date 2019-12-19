import React, { Component } from 'react'
import DivSession from './SessionInfoStyle';

export default class SessionInfo extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { date, duration } = this.props.session;
        const dateToDisplay = `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
        const hourToDisplay = `${new Date(date).getHours()}:${new Date(date).getMinutes()}`
        return (
          <DivSession>
               <p><i class="fas fa-calendar-day"></i> {dateToDisplay} - {hourToDisplay} </p>
               <p><i class="fas fa-stopwatch"></i> {duration}h</p>
          </DivSession> 
        )
    }
}
