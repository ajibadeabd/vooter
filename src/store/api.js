import axios from 'axios'

 const Api= () => {
    return axios.create({
        baseURL:'http://192.168.43.20:111/api/v1',
        // baseURL:'https://invxt-app-pay.herokuapp.com/api/v1',
    });
};
export default Api