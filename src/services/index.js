import axios from "axios";

const token = localStorage.getItem("msg_token") ?? undefined;
const requests = axios.create({
  baseURL: 'http://localhost:5054/api/',
  // baseURL: 'http://43.163.233.176:5054/api/',
  timeout: 10000,
  // headers: {
  //   Authorization: token
  // }
})

requests.interceptors.response.use((res) => {
  return res.data
}, (error) => {
  return Promise.reject(new Error('requests failed'))
})

export default requests;
