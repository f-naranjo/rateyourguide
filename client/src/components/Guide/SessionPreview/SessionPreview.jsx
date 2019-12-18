import React, { Component, Fragment } from 'react'
import ButtonForward from '../../../styles/buttons'
import { Link } from 'react-router-dom';
import GuideService from '../../../services/GuideService';
import AdminSessionDiv from './SessionPreviewStyle';

export default class SessionAdminPreview extends Component {
    constructor(props) {
        super(props)
        this.guideService = new GuideService();
    }

    deleteSession = (id) => {
        console.log("entro a borrar")
        this.guideService.deleteSession(id)
            .then(() => {
                this.props.updateUser()
            })
    }

    confirmSession = (id) => {
        console.log("entro a borrar")
        this.guideService.confirmSession(id)
            .then(() => {
                this.props.updateUser()
            })
    }

    render() {
        if (this.props.session) {
            const { currentPeople, date, duration, language, maxPeople, status, _id } = this.props.session;
            const dateToDisplay = `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
            const hourToDisplay = `${new Date(date).getHours()}:${new Date(date).getMinutes()}`
            const languageToDisplay = {
                english: "Inglés",
                spanish: "Español",
                russian: "Ruso",
                german: "Alemán",
                french: "Francés"
            }
            const statusToDisplay = {
                pending: "Pendiente",
                confirmed: "Confirmada"
            }
            return (
                <AdminSessionDiv>
                    <div className="date">
                        <p>Fecha: <span>{dateToDisplay} - {hourToDisplay} </span> </p>
                    </div>
                    <div className="info">
                        <div className="info-left">
                            <p>Duration: <span>{duration}</span> Horas</p>
                            <p>Idioma: <span>{languageToDisplay[language]}</span></p>
                        </div>
                        <div className="info-right">
                            <p>Clientes apuntados: <span>{currentPeople}</span> de {maxPeople}</p>
                            <p>Estado: <span>{statusToDisplay[status]}</span></p>
                        </div>
                    </div>
                    <div className="ctrl-btns">
                        <p className="admin-btn create" onClick={(e) => this.confirmSession(_id)}> <i className="fas fa-edit"></i> CONFIRMAR SESIÓN</p>
                        <p className="admin-btn delete" onClick={(e) => this.deleteSession(_id)}><i className="fas fa-trash-alt"></i> ELIMINAR SESIÓN</p>
                    </div>



                </AdminSessionDiv>

            )
        } else return (<p>cargando</p>)
    }
}
