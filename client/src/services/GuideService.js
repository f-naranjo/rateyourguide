import axios from 'axios';

class GuideService{
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/guides`,
      withCredentials: true    
    })
  }

  getGuide = (id) => {
    return this.instance.get(`/${id}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  getSessions = (id) => {
    return this.instance.get(`/sessions/guide/${id}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  createTour = (userId,img,title,claim,description,price,location) => {
    return this.instance.post('/tour/create', {userId,img,title,claim,description,price,location})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  createSession = (owner, tour, maxPeople, duration, language, date) => {
    return this.instance.post('/session/create', {owner, tour, maxPeople, duration, language, date})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  confirmSession = (id) =>{
    return this.instance.post('/session/confirm/',{id})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  deleteSession = (id) => {
    return this.instance.get(`/session/${id}/delete`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.log(error))
  }

  editTour = (userId,tourId,img,title,claim,description,price,location) => {
    return this.instance.post('/tour/edit', {userId,tourId,img,title,claim,description,price,location})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  editProfile = (guideId,info) => {
    return this.instance.post('/profile/edit', {guideId,info})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  deleteTour = (tourId) => {
    return this.instance.get(`/tour/${tourId}/delete`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.log(error))
  }

}

export default GuideService;