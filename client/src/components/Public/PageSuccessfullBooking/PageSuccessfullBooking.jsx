import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import ButtonForward from '../../../styles/buttons';
import AuthButtons from '../AuthButtons/AuthButtons';
import SuccessDiv from './PageSuccessfullBookingStyle';

export default class PageSuccessfullBooking extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SuccessDiv>
                <ReactSVG src="./success.svg"></ReactSVG>
                <h2>¡Genial! Tu reserva se ha realizado con éxito. </h2>
                <h2>Cuando el guíe la confirme te llegará un correo con todos los detalles.</h2>
                <h2 className="last">¿Quieres explorar más?</h2>
               <Link to="/book/now"><ButtonForward>VER EXPERIENCIAS PARA HOY <i className="fas fa-check"></i></ButtonForward></Link>
               <Link to="/book"><ButtonForward>RESERVAR OTRA EXPERIENCIA <i className="far fa-calendar-alt"></i></ButtonForward></Link>
            </SuccessDiv>
        )
    }
}
