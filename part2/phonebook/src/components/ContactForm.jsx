import Header from "./Header";
import { useState } from "react";

const ContactForm = ({title, handleSaveContact, handleUpdateContact, handleFindDuplicated}) => {

    const [duplicated, setDuplicated] = useState(undefined);
    const [contact, setContact] = useState({
        name: '',
        number: '',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (!duplicated) {
            handleSaveContact(contact)
        } else {
            handleUpdateContact({...duplicated, number: contact.number})
        }
    }

    const handleNameChange = ({target}) => {
        const name = target.value;
        const duplicated = handleFindDuplicated(name);

        setDuplicated(duplicated)
        setContact({...contact, name});
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