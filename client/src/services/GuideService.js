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

  createTour = (userId,img,title,claim,description,price,meetingPoint) => {
    return this.instance.post('/tour/create', {userId,img,title,claim,description,price,meetingPoint})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  editTour = (userId,img,title,claim,description,price,meetingPoint) => {
    return this.instance.post('/tour/edit', {userId,img,title,claim,description,price,meetingPoint})
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