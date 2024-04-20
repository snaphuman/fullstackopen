
const Contacts = ({list}) => {

    return  (
        <ul>
        {
            list.map((contact, index) => (
                <li key={index}>
                    { contact.name }
                    { contact.number }
                </li>
            ))
        }
        </ul>
    )
}

export default Contacts;