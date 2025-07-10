import { environments } from '../../utils/env'
import axios from "axios";



export const api = axios.create({
    baseURL: environments.apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
})