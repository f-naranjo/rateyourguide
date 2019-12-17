import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import AuthService from './../../../services/AuthService';
import GuideMainDiv from '../GuideStyles';
import GuideService from '../../../services/GuideService';
import EditProfileForm from './GuideProfileStyle';



export default class GuideProfile extends Component {
    constructor(props) {
        super(props)
        this.authService = new AuthService();
        this.guideService = new GuideService();
    }
    state = {
        name: "",
        description: "",
        img: "",
        email: "",
        phone: "",
        //certification: "",
        city: "",
        languages: "Español, Inglés",
        guideId: null,
    }

    handleUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append('picture', e.target.files[0])
        this.authService.upload(uploadData)
            .then(
                (data) => {
                    this.setState({ ...this.state, img: data.secure_url })
                },
                (error) => {
                    console.error(error)
                }
            )
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value })

    }

    editProfile = (e) => {
        e.preventDefault()
        const {name,description,img,email,phone,city,guideId} = this.state
        let info = {
            name: name,
            description: description,
            img:img,
            email:email,
            phone:phone,
          //certification:certification,
            city:city,
          //languages:languages,
        }
        this.guideService.editProfile(guideId, info)
            .then(
                (guideUpdated) => {

                }
            ).catch(err => console.log(err))
    }

    componentDidMount() {
        if (this.state.guideId === null) {
            this.setState({
                ...this.state,
                name: this.props.location.guide.info.name,
                description: this.props.location.guide.info.description,
                img: this.props.location.guide.info.img,
                email: this.props.location.guide.info.email,
                phone: this.props.location.guide.info.phone,
                //certification: this.props.location.guide.certification,
                city: this.props.location.guide.info.city,
                //languages: this.props.location.languages,
                guideId: this.props.location.guide.id
            })
        }
    }


    render() {
        if (this.props.location.guide) {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Mis Tours / Editar Perfil</h4><p>Actualiza tus datos para que los usuarios te encuentren: {this.state.title}</p></div>
                    <div className="page-controls">
                    </div>
                    <EditProfileForm className="edit-profile-form" >
                        <div className="form-left">
                            <label htmlFor="picture">Edita tu imagen de perfil: </label>
                            <input type="file" name="picture" onChange={this.handleUpload} />
                            <label htmlFor="name">Nompre Completo: </label>
                            <input className="name" type="text" name="name" value={this.state.name} required onChange={this.handleChange} />
                            <label htmlFor="city">Tu ciudad de trabajo:</label>
                            <input className="city" type="text" name="city" value={this.state.city} required onChange={this.handleChange} />
                            <label htmlFor="description">Cuéntale a la gente quién eres: </label>
                            <textarea className="description" name="description" value={this.state.description} required onChange={this.handleChange} />
                        </div>
                        <div className="form-right">
                            <div className="profile-img"><img src={this.state.img} alt="Tu nueva imagen de perfil" /></div>
                            <label htmlFor="languages">Añade los idiomas en los que realizas experiencias:</label>
                            <input className="languages" type="text" name="languages" value={this.state.languages} required onChange={this.handleChange} />
                            <label htmlFor="email">Tu correo electrónico:</label>
                            <input className="email" type="text" name="email" value={this.state.email} required onChange={this.handleChange} />
                            <label htmlFor="phone">Tu teléfono de contacto:</label>
                            <input className="phone" type="text" name="phone" value={this.state.phone} required onChange={this.handleChange} />
                            <input type="submit" onClick={this.editProfile} />
                        </div>
                    </EditProfileForm>
                </GuideMainDiv>
            )

        } else {
            return (<p>loading...</p>)
        }



    }
}


