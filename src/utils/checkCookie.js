import axios from '../baseUrl';

const checkToken=()=>{
    return axios.get('/student/checkCookie',{withCredentials:true})
}
export default checkToken;