const Contacts = ({list, handleRemoveContact}) => {

    return  (
        <ul>
        {
            list.map((contact) => (
                <li key={contact.id}>
                    { contact.name }
                    { contact.number }
                    <span>
                        <button onClick={() => handleRemoveContact(contact)}>Remove</button>
                    </span>
                </li>
            ))
        }
        </ul>
    )
}

export default Contacts;