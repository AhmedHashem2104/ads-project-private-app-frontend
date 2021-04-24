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
 },
 countriesAPI : async () => {
   return await instance.get('/country' , {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
   })
 },
 categoriesAPI : async () => {
  return await instance.get('/category' , {
   headers : {
     'Authorization' : `Bearer ${localStorage.getItem("token")}`
   }
  })
},
storeAd : async (data) => {
  return await instance.post('/ad' , data , {
   headers : {
     'Authorization' : `Bearer ${localStorage.getItem("token")}`
   }
  })
},
myAdsFetch : async (page) => {
  return await instance.get(`/myAds/${page}` , {
   headers : {
     'Authorization' : `Bearer ${localStorage.getItem("token")}`
   }
  })
}
}

export default APIS