import classes from './SendBlock.module.css';

import React from 'react';

const Message = (props) => {
    let buttonClick = () => {
        if (props.store.block_MessagesPage.newMessageText !== '' ){
            props.store.onAddMessage(props.id.id)
        }}
    let MessagesChange = e => props.store.onMessageChange(e.target.value)

    return (
        <div className={classes.send_block}>
            <textarea 
                className={classes.textarea} placeholder="Your news..." 
                value={props.store.block_MessagesPage.newMessageText}
                onChange={MessagesChange}/>
            <button  onClick ={buttonClick} className={classes.send}>send</button>
        </div>
    )
}

export default Message;