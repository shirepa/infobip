import axios from 'axios'

export const AXIOS = axios.create({
  baseURL: `http://s3.eu-central-1.amazonaws.com`
})
