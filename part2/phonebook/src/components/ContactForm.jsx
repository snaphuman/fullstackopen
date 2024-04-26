import http from "../utils/http";
import Header from "./Header";
import { useState } from "react";

const ContactForm = ({title, handleAddContact, handleDuplicated}) => {

    const [contact, setContact] = useState({
        name: '',
        number: '',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        handleAddContact(contact)
        http.saveContact(contact).then(console.log)
    }

    const handleNameChange = ({target}) => {
        const name = target.value;

        handleDuplicated(name)
        setContact({...contact, name})
    }

    const handleNumberChange = ({target}) => {
        const number = target.value;

        setContact({...contact, number})
    }

    return (
        <>
        <Header title={title} />
        <form onSubmit={handleSubmit}>
            name: <input type='text' value={contact.name} onChange={handleNameChange} />
            number: <input type='text' value={contact.number} onChange={handleNumberChange}  />
            <button type='submit'>Add</button>
        </form>
        </>
    )
}

export default ContactForm;