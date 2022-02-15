import SendBlock from './SendBlock'
import {addMessage,updateMessageText} from '../../../../../../redux/reducer/Block_Messages_reducer' 

import {connect} from 'react-redux'

    let mapStateToProps = (state) => {
        return {
           profilePage : state.block_MessagesPage
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
        //     onButtonClick    : (name) => {
        //         dispatch(addMessage(props.id.id.slice(1) - 1))
        //    },
           onMessagesChange  : (text) => {
                dispatch(updateMessageText(text))
           }
        }
    }
    const SendBlockContainer = connect(mapStateToProps,mapDispatchToProps)(SendBlock)

export default SendBlockContainer;