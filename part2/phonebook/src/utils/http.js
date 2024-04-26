import axios from 'axios';
const apiUrl = 'http://localhost:3001/contacts'; 

const getContacts = () =>  {
    const req = axios.get(apiUrl);
    return req.then(resp => resp.data)
}

const saveContact = (contact) => {
    const req = axios.post(apiUrl, contact);
    return req.then(res => res.data);
} 

export default {
    getContacts,
    saveContact
}