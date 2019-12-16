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

}

export default GuideService;