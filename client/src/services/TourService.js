import axios from 'axios';

class TourService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/tours`,
      withCredentials: true    
    })
  }

  allTours = () => {
    return this.instance.get('/all')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  allGuides = () => {
    return this.instance.get('/guides')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  filterGuidesNow = (location,language,duration,people) => {
    return this.instance.post('/guides/now/filter', {location,language,duration,people})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  filterGuidesBook = (location,language,people,dateFrom,dateTo) => {
    return this.instance.post('/guides/book/filter', {location,language,people,dateFrom,dateTo})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  tourDetail = (idTour) => {
    return this.instance.get(`/${idTour}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  editTour = (idTour,tourInfo) => {
    return this.instance.post(`/${idTour}`,tourInfo)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  deleteTour = (idTour) => {
    return this.instance.delete(`/delete/${idTour}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  sessionDetail = (idSession) => {
    return this.instance.get(`/session/${idSession}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

}

export default TourService;