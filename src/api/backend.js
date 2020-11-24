import axios from "axios"
import getEnvVars from '../../enviorment';

const {apiURL} = getEnvVars();

const instance = axios.create({
    baseURL: apiURL
});

export default instance;