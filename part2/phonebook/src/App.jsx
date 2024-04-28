import { useEffect, useState } from "react";
import Messages from "./components/Messages";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import http from "./utils/http";

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [message, setMessage] = useState(null);

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

      setMessage(!!duplicated ? msg : null);
      return duplicated;
    }
  }

  const handleSave = (contact) => {
    http.saveContact(contact).then(res => {
      setContacts([...contacts, res]);
     })
  }

  const handleUpdate = (contact) => {
    const msg = `${contact.name} is already added to phonebook, replace the  old number with a new one`;
    const confirm = window.confirm(msg);

    if (confirm) {
      http.updateContact(contact).then(res => {
        const newList = filtered.map(item => {
          if (item.id === res.id) {
            item.number = res.number;
          }
          return item;
        });

        setFiltered(newList);
        setContacts(newList);
      });
    }
  }

  const handleRemove = ({id, name}) => {
    const msg = `Are you sure to remove ${name}?`;
    const confirm = window.confirm(msg);

    if (confirm) {
      http.removeContact(id).then((res) => {
        const newList = filtered.filter(item => item.id !== res.id);

        setFiltered(newList);
        setContacts(newList);
      })
    }
  }

  const handleFilter = (value) => {
    const pattern = new RegExp(value);
    const filtered = contacts.filter(contact => {
      return pattern.test(contact.name.toLowerCase());
    })

    setFiltered(filtered);
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
