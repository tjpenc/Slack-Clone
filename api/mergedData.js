import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getMessagesByChannel = (channelId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages.json?orderBy="channelId"&equalTo="${channelId}"`)
    .then((response) => (response.data))
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getMessagesByChannel;
