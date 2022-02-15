import React from 'react';
import {Routes, Route} from "react-router-dom"

import Message from './Message/Message';

import classes from './Messages.module.css';


const Messages = (props) => {
    let messageElements = props.block_MessagesPage.contact_data
        .map(m => <Route
            key={m.id} path={`id_${m.id}/*`}
            element={< Message state = {m} store={props} />}/>)

    return (
        <div className={classes.block__message}>
            <Routes>
                {messageElements}
            </Routes>
        </div>
    )
}
export default Messages;