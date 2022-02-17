import {connect} from 'react-redux'
import { compose } from 'redux';
import {addMessage,updateMessageText} from '../../../redux/reducer/Block_Messages_reducer' 
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

import Block_Messages from "./Block_Messages";



let mapStateToProps = (state) => {return {block_MessagesPage: state.block_MessagesPage,}}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (name,id = '0') => {dispatch(addMessage(name,id))},
        onMessageChange: (text) => {dispatch(updateMessageText(text))}
    }
}

let Block_MessagesContainer = compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Block_Messages)

export default  Block_MessagesContainer

