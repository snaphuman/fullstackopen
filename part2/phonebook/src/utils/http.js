import axios from 'axios';
const apiUrl = 'http://localhost:3001/contacts'; 

const getContacts = () =>  {
    const req = axios.get(apiUrl);
    return req.then(resp => resp.data)
}

export default {
    getContacts
}