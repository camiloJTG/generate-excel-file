import { getAccessToken, getSelectionProcess } from './clients/rankmi.client';

const main = async () => {
   const token = await getAccessToken();
   if (!token) throw new Error('Error obtaining access token');
   const { token: accessToken } = token;

   const data = await getSelectionProcess('1', '100', 'active', accessToken);
   if (!data) throw new Error('Error obtaining selection process data');
};
