import ContactsContainer from "./Contacts/ContactsContainer";
import MessagesContainer from "./Messages/MessagesContainer";


import classes from './Block_Messages.module.css';


const Block_Messages = () => {
    return (
        <div className={classes.messages__block}>
            <ContactsContainer />
            <MessagesContainer />
        </div>
    )
}
export default Block_Messages;