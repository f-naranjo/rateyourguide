import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';

export default class GuideSessions extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
    }
    state = {
        user: null,
    }

    setUser = (user) => {
       
        this.setState({ ...this.state, user })
    }

    fetchUser = () => {
        if (this.state.user === null) {
            this.authService.loggedIn()
                .then(
                    (user) => {
                        console.log(user)
                        this.setUser(user)
                    },
                    (error) => {
                        console.log("2")
                        this.setUser(false)
                    }
                )
                .catch(() => {
                    console.log("3")
                    this.setUser(false)
                })
        }
    }


    render() {
        this.fetchUser()
        console.log(this.props.match.url)
        return (
            <GuideMainDiv>
                <h1>ESTAMOS DENTRO DEL PANEL DE SESSIONS!</h1>
            </GuideMainDiv>
        )
    }
}
