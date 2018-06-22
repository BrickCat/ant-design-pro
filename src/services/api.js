import { stringify } from 'qs';
import request from '../utils/request';
import mockjs from 'mockjs';
import { getRule, postRule } from '../../mock/rule';
import { getActivities, getNotice, getFakeList } from '../../mock/api';
import { getFakeChartData } from '../../mock/chart';
import { getProfileBasicData } from '../../mock/profile';
import { getProfileAdvancedData } from '../../mock/profile';
import { getNotices } from '../../mock/notices';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  //return request('/api/fake_chart_data');
  return getFakeChartData;
}

export async function queryTags() {
  //return request('/api/tags');
  return mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  });
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  var grant_type = 'password';
  var scope = 'server';
  var randomStr = Math.ceil(Math.random() * 100000) + '_' + Date.now();
  var username = params.username;
  var password = params.password;
  var code = '';
  return request({
    url:'/auth/oauth/token',
    headers: {
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { username, password, randomStr, code, grant_type, scope }
  })
}

export async function getInfo() {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  //return request('/api/notices');
  return getNotice;
}
