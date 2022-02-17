import Block_Messages from "./Block_Messages";

import {connect} from 'react-redux'
import {addMessage,updateMessageText} from '../../../redux/reducer/Block_Messages_reducer' 


let mapStateToProps = (state) => {
    return {
        block_MessagesPage: state.block_MessagesPage,
        isAuth : state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (name,id = '0') => {
            dispatch(addMessage(name,id))
        },
        onMessageChange: (text) => {
            dispatch(updateMessageText(text))
        }
    }
}
const Block_MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Block_Messages)

export default Block_MessagesContainer;