import { Navigate } from "react-router-dom"
import Contacts from './Contacts/Contacts'
import Messages from "./Messages/Messages";

import classes from './Block_Messages.module.css';

const Block_Messages = (props) => {
    if(props.isAuth) return <Navigate to='/login'/>
    return (
        <div className={classes.messages__block}>
            <Contacts state={props}/>
            <Messages state={props} />
        </div>
    )
}
export default Block_Messages;