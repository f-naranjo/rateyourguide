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
        user:null,
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
            img: img,
            email: email,
            phone: phone,
          //certification:certification,
            city:city,
          //languages:languages,
        }
        this.guideService.editProfile(guideId, info)
            .then(
                (guideUpdated) => {
                   // this.props.history.goBack()
                   this.props.updateUser()
                   this.props.history.push("/guides/adminPanel")
                }
            ).catch(err => console.log(err))
    }

    setUser = (user) => {
        this.setState({ 
            ...this.state, 
            user:user,
            name: user.info.name,
            description: user.info.description,
            img: user.info.img,
            email: user.info.email,
            phone: user.info.phone,
            city: user.info.city,
            languages: "Español, Inglés",
            guideId: user.id,
        
         })
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

    componentDidMount() {
        this.fetchUser()
    }


    render() {
        if (this.state.user !== null) {
            return (
                <GuideMainDiv>
                    <div className="breadcrumbs"><h4>Mi panel / Mis Tours / Editar Perfil</h4><p>Actualiza tus datos para que los usuarios te encuentren.</p></div>
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


