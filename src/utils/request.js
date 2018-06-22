import axios from 'axios';
import { notification } from 'antd';
import { routerRedux } from 'dva/router';
import store from '../index';
import {getToken} from "./Token";
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  console.log(config)
  if (getToken()) {
    if(config.url == "/auth/oauth/token"){
      const { dispatch } = store;
      dispatch(routerRedux.push('/'));
      return false;
    }
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 1) {
      notification.info(res.msg)
      return Promise.reject(res)
    }
    return response
  },
  error => {
     const res = error.response
     const { dispatch } = store;
    if (res.status === 478 || res.status === 403) {
      dispatch(routerRedux.push('/exception/403'));
      return;
    } else if (res.status === 400) {
      notification.error(res.status + '： ' + res.data.error_description)
    } else if (res.status === 202 ) { //三方未绑定

    } else if (res.status <= 504 && status >= 500) {//服务异常
      dispatch(routerRedux.push('/exception/500'));
      return;
    }else if(res.status >= 404 && status < 422){
      dispatch(routerRedux.push('/exception/404'));
    }else if(res.status === 401){
      dispatch({
        type: 'login/logout',
      });
      return;
    } else {
      notification.error(res.status + '： ' + res.data.message)
    }
    return Promise.reject(error)
  }
)

export default service;

