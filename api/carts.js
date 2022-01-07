import { apiServer } from '~/api';

export const postAuthLogin = (data) => apiServer.post('auth/login', data);
export const getMember = (token) => apiServer.get('me', { headers: { 'Authorization': `Bearer ${token}` } });
export const getFundraising = () => apiServer.get('courses/fundraising');

export const postCarts = (data, headers={}) => apiServer.post('carts', data, headers);
export const delCarts = (data, headers={}) => apiServer.delete('carts', data, headers);