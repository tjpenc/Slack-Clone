import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const createChannel = (messageObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/channels.json`, messageObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/channels/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

const updateChannel = (messageObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/channels/${messageObj.firebaseKey}.json`, messageObj)
    .then(resolve)
    .catch(reject);
});

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages.json`)
    .then((response) => (response.data))
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleChannel = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/channels/${firebaseKey}`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  createChannel, updateChannel, getChannels, getSingleChannel,
};
