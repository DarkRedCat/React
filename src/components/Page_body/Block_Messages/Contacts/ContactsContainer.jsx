import {connect} from 'react-redux'
import Contacts from './Contacts'


let mapStateToProps = (state) => {
  return {block_MessagesPage : state.block_MessagesPage}
}
const ContactsContainer = connect(mapStateToProps)(Contacts)

export default ContactsContainer;