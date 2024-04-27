const Contacts = ({list, handleRemoveContact}) => {

    return  (
        <ul>
        {
            list.map((contact, index) => (
                <li key={index}>
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