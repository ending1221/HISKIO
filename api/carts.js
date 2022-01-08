import { apiServer } from '~/api';

export const postAuthLogin = (data) => apiServer.post('auth/login', data);
export const getMember = (token) => apiServer.get('me', { headers: { 'Authorization': `Bearer ${token}` } });
export const getFundraising = () => apiServer.get('courses/fundraising');

export const postCarts = (data, token='') => apiServer.post('carts', data, { headers: { 'Authorization': `Bearer ${token}` } });
export const delCarts = (data, token='') => apiServer.delete('carts', {data,  headers: { 'Authorization': `Bearer ${token}` } });