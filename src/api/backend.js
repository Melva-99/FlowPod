import axios from "axios";
import { processColor } from "react-native";
import getEnvVars from '../../enviorment';

const{ apiUrl } = getEnvVars(); 

const instance = axios.create({
    baseURL: apiUrl
})

export default instance;

