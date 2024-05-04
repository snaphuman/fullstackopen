
const Messages = ({message}) => {

    return (
        <div className={message.type}>
            {message.text}
        </div>
    )
}

export default Messages;