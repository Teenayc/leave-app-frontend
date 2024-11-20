import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies(null );
const sandbox_api = `http://localhost:3000/api/v1/psc`


const axiosClient = axios.create({
  baseURL: sandbox_api
})

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use((config) => {
    const token = cookies.get('accessToken')
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {

    try{
        const {response} = error;
        if(response.status === 401){
          cookies.remove('accessToken')
        }
    }catch(e){
        console.error(e)
    }

    throw error

});

export default axiosClient;
