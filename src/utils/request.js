import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios
//接口域名
axios.defaults.baseURL = 'http://data.toutiaojk.com/extend/list/'
// http://192.168.1.1:5000
// url表示后面拼接的url
export var request = async (type = 'POST', url = '', data = {}) => {
  let result
  type = type.toUpperCase()
  if (type === 'GET') {
    await axios.get(url, { params: data }).then(res => {
      result = res.data
    })
  } else if (type === 'POST') {
    await axios.post(url, qs.stringify(data)).then(res => {
      result = res.data
    })
  }
  return result
}
