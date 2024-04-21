import { useEffect, useState } from "react";
import Messages from "./components/Messages";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import http from "./utils/http";

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState(contacts);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    http.getContacts()
        .then(contacts => {
          setContacts(contacts);
          setFiltered(contacts);
    })
  }, [])

  const handleSetContacts = (contact) => {
    setContacts([...contacts, contact]);
    setFiltered([...filtered, contact]);
  }

  const handleDuplicated = (name) => {
    const isDuplicated = contacts.findIndex(contact => contact.name === name) !== -1
    const msg = `${name} is Duplicated`;

    setMessage(isDuplicated ? msg : null);
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
    <ContactForm title="Contact Info" handleAddContact={handleSetContacts} handleDuplicated={handleDuplicated} />
    <Contacts list={filtered} />


      
    </>
  )
}

export default App
