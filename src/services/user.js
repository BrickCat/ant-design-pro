import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request({
    url: '/admin/user/info',
    method: 'get'
  });
}
