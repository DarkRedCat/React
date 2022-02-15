import SendBlock from './SendBlock/SendBlock';
import classes from './Message.module.css';

const Message = (props) => {
    let UserState = props.store.block_MessagesPage.myData
    let propsMessage = props.store.block_MessagesPage.message


    let messageItems =  propsMessage['id_' + props.state.id].map(m => {
        if (m[0] === 'Posted') 
            return <div key={m[1]} className={classes.message}>
                <div className={classes.avatar}>
                    <img src="https://via.placeholder.com/100/000000/FF0000?text=WTF" alt='1'/>
                </div>

                <div className={classes.text}>
                    <div className={classes.name}>
                        {`${UserState.name}`}
                    </div>
                    {`${m[2]}`}
                </div>

            </div>

        if (m[0] === 'obtained') 
            return <div key={m[1]} className={`${classes.message} ${classes.Mymessage}`}>

                <div className={classes.text}>
                    <div className={classes.name}>
                        {`${props.state.name}`}
                    </div>
                    {`${m[2]}`}
                </div>
                <div className={classes.avatar}>
                    <img src={`${props.state.avatar}`} alt='1'/>
                </div>
            </div>

    })

    return (
        <div>
            <div className={classes.ssd}>
                {messageItems}
            </div >
            <SendBlock id={props.state} store={props.store} />
        </div>

    )
}

export default Message;