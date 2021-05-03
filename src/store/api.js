import axios from 'axios'

 const Api= () => {
    return axios.create({
        // baseURL:'http://localhost:3011/api/v1',
        baseURL:'http://192.168.43.198:1112/api/v1',

        // baseURL:'https://invxt-app-pay.herokuapp.com/api/v1',
        // headers: {  
    });
};
export default Api