import axios from 'axios'
import { logoutRequest } from '../../actions/authAction'

export const headers = {
  appKey: process.env.REACT_APP_KEY,
  appName: 'app',
  appVersion: 'v1.0.0',
  deviceId: '43ce86ff',
  validateTime: '1586325072921',
  accessMode: 'H5',
  osType: 1,
}

export const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/uat-api' : 'http://10.3.18.1:83/uat-api',
})

export const setupInterceptors = (store) => {
  API.interceptors.response.use(
    response => {
      if (response.data.code === 16110000 || response.data.code === 9003) {
        store.dispatch(logoutRequest())
        return Promise.reject(new Error(response.data.message))
      }
      return response
    },
    error => {
      return Promise.reject(error)
    },
  )
}

// wss://echo.websocket.org/
export const ws_url = 'wss://message.hnlingtou2.com/push/ws'

export const ws_params = {
  appKey: 'MTAwMSYxMDAxMTA=',
  accessMode: 'H5',
  channel: 'H5',
}
