import axios from "axios";
import * as congfig from '../redux/constants/configTypes'
export default function Callapi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${congfig.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}