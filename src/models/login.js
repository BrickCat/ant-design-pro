import { routerRedux } from 'dva/router';
import { fakeAccountLogin,getInfo } from '../services/api';
import { setAuthority } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';
import {setToken} from "../utils/Token";

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      let result;
      // Login successfully
      if (response.status === 200) {
        setToken(response.data.access_token)
        const userInfo = yield call(getInfo);
        console.log(userInfo)
        result = {
          type:payload.type,
          currentAuthority: userInfo.data.roles[0],
          status:'ok'
        }
      }
      yield put({
        type: 'changeLoginStatus',
        payload: result,
      });
      reloadAuthorized();
      yield put(routerRedux.push('/'));
    },
    *logout(_, { put, select }) {
      try {
        setToken('');
        // get location pathname
        const urlParams = new URL(window.location.href);
        const pathname = yield select(state => state.routing.location.pathname);
        // add the parameters in the url
        urlParams.searchParams.set('redirect', pathname);
        window.history.replaceState(null, 'login', urlParams.href);
      } finally {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            status: false,
            currentAuthority: 'guest',
          },
        });
        reloadAuthorized();
        yield put(routerRedux.push('/f/index'));
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
