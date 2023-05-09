import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const createMessage = (messageObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/messages.json`, messageObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/messages/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

const updateMessage = (messageObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/messages/${messageObj.firebaseKey}.json`, messageObj)
    .then(resolve)
    .catch(reject);
});

const getMessages = (messageObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/messages/${messageObj.firebaseKey}.json`)
    .then((response) => (response.data))
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const updateMessageLikes = (messageObj, likes) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/messages/${messageObj.firebaseKey}.json`, messageObj, likes)
    .then(resolve)
    .catch(reject);
});

export {
  createMessage, updateMessage, getMessages, updateMessageLikes,
};
