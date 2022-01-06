import { apiServer } from '~/api';

export const postAuthLogin = (data) => apiServer.post('auth/login', data);
export const getMember = () => apiServer.get('me');
export const getFundraising = () => apiServer.get('courses/fundraising');

export const postCarts = (data, headers={}) => apiServer.post('courses/fundraising', data, headers);
export const delCarts = (data, headers={}) => apiServer.delete('courses/fundraising', data, headers);