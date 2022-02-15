import {connect} from 'react-redux'

import {addMessage,updateMessageText} from '../../../../redux/reducer/Block_Messages_reducer' 

import Messages from './Messages'


let mapStateToProps = (state) => {
    return {block_MessagesPage: state.block_MessagesPage}
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
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;