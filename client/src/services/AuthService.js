import axios from 'axios';

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true    
    })
  }

  signup = (user) => {
    return this.instance.post('/signup', user)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  login = (user) => {
    return this.instance.post('/login', user)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  loginGuide = (user) => {
    return this.instance.post('/login/guide/true', user)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  loggedIn= () => {
    return this.instance.get('/loggedin')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  loggedInGuide = () => {
    return this.instance.get('/loggedinGuide')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  upload = (picture) => {
    return this.instance.post('/upload', picture)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  logout = (picture) => {
    return this.instance.post('/logout')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }
}

export default AuthService;