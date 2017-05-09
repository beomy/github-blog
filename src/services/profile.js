// https://developer.github.com/v3/
import axios from 'axios';
import * as Config from '../Config';
 
export function getProfileInfo() {
    return axios({
        method: 'get',
        url: Config.API + "/github/profile"
    });
}
