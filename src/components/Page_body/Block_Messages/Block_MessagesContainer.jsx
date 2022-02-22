import {connect} from 'react-redux'
import { compose } from 'redux';
import {addMessage} from '../../../redux/reducer/blockMessages-reducer' 
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

import Block_Messages from "./Block_Messages";



let mapStateToProps = (state) => {return {block_MessagesPage: state.block_MessagesPage,}}
let mapDispatchToProps = (dispatch) => {return {onAddMessage: (id,text) => {dispatch(addMessage(id,text))}}}

let Block_MessagesContainer = compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Block_Messages)

export default  Block_MessagesContainer

