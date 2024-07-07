import { useEffect, useState } from "react";
import Messages from "./components/Messages";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import http from "./utils/http";
import './index.css';

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [message, setMessage] = useState({text: null, type: null});

  useEffect(() => {
    http.getContacts()
      .then(contacts => {
        setContacts(contacts);
        setFiltered(contacts);
    })
  }, [])

  const handleFindDuplicated = (name) => {
    const duplicated = contacts.find(contact => contact.name === name);
    if (duplicated) {
      const msg = `${duplicated.name} is Duplicated`;

      handleMessage(msg, 'info');
      return duplicated;
    }
  }

  const handleSave = (contact) => {
    http.saveContact(contact).then(res => {
      setContacts([...contacts, res]);
      setFiltered([...contacts, res]);

      const msg = `${contact.name} was saved successfully`;
      handleMessage(msg, 'success');

     }).catch(_err => {
        const msg = `Contact ${contact.name} does not exist!`;
        handleMessage(msg, 'error');

      });
  }

  const handleUpdate = (contact) => {
    const msg = `${contact.name} is already added to phonebook, replace the  old number with a new one`;
    const confirm = window.confirm(msg);

    if (confirm) {
      http.updateContact(contact).then(res => {
        const newList = filtered.map(item => {
          if (item.uuid === contact.uuid) {
            item.number = res.number;
          }
          return item;
        });

        setFiltered(newList);
        setContacts(newList);

        const msg = `${contact.name} was updated successfully`;
        handleMessage(msg, 'success');
      }).catch(_err => {
        const msg = `Contact ${contact.name} does not exist!`;
        handleMessage(msg, 'error');
      });
    }
  }

  const handleRemove = ({uuid, name}) => {
    const msg = `Are you sure to remove ${name}?`;
    const confirm = window.confirm(msg);

    if (confirm) {
      http.removeContact(uuid).then((res) => {
        const newList = filtered.filter(item => item.uuid !== uuid);

        setFiltered(newList);
        setContacts(newList);

        const msg = `${name} was deleted successfully`;
        handleMessage(msg, 'success');
      }).catch(_err => {
        const msg = `Contact ${name} does not exist!`;
        handleMessage(msg, 'error');
      });
    }
  }

  const handleFilter = (value) => {
    const pattern = new RegExp(value.toLowerCase());
    const filtered = contacts.filter(contact => {
      return pattern.test(contact.name.toLowerCase());
    })

    setFiltered(filtered);
  }

  const handleMessage = (text, type) => {
    setMessage({text, type})
    setTimeout(() => setMessage({text: null, type: null}), 5000)
  }

  return (
    <>
    <Messages message={message} />
    <Filter title="Phonebook" handleFilter={handleFilter} />
    <ContactForm 
      title="Contact Info" 
      handleSaveContact={handleSave} 
      handleUpdateContact={handleUpdate} 
      handleFindDuplicated={handleFindDuplicated} 
    />
    <Contacts list={filtered} handleRemoveContact={handleRemove} />
    </>
  )
}

export default App
