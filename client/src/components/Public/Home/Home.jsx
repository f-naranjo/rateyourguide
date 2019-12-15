import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HomeDiv from './HomeStyle';
import { ReactSVG } from 'react-svg'
import ButtonForward from '../../../styles/buttons';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomeDiv>
                <ReactSVG src="./dingologo.svg"></ReactSVG>
                <h2>Encuentra experiencias inolvidables cerca de ti, realizadas por guías turísticos freelance certificados.</h2>
               <Link to="/book/now"><ButtonForward>VER EXPERIENCIAS PARA HOY <i class="fas fa-check"></i></ButtonForward></Link>
               <Link to="/book"><ButtonForward>RESERVAR UNA EXPERIENCIA <i class="far fa-calendar-alt"></i></ButtonForward></Link>
            </HomeDiv>


        )
    }
}
