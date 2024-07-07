import axios from 'axios';
const apiUrl = '/api/persons'; 

const getContacts = () =>  {
    const req = axios.get(apiUrl);
    return req.then(resp => resp.data)
}

const saveContact = (contact) => {
    const req = axios.post(apiUrl, contact);
    return req.then(res => res.data);
} 

const removeContact = (uuid) => {
    const req = axios.delete(`${apiUrl}/${uuid}`);
    return req.then(res => res.data);
}

const updateContact = (contact) => {
    const req = axios.put(`${apiUrl}/${contact.uuid}`, contact);
    return req.then(res => res.data);
}

export default {
    getContacts,
    saveContact,
    removeContact,
    updateContact,
}