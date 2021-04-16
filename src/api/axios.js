import axios from 'axios'

export const API_URL = 'http://127.0.0.1:3333/api/v1'

export const API_IMAGE = 'http://127.0.0.1:3333/uploads'

export const instance = axios.create({
    baseURL: API_URL
  });

const APIS = {
    login : async (userData)  => {
         return await instance.post('/login' , userData)
    },
    homePageAds : async (requestType , number)  => {
      return await instance.get(`/${requestType}/${number}` , {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem("token")}`
        }
      })
 }
}

export default APIS