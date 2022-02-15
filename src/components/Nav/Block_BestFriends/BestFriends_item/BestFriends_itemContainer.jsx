import {connect} from 'react-redux'
import BestFriends_item from './BestFriends_item'


let mapStateToProps = (state) => {
  return {navBar : state.nav}
}
const BestFriends_itemContainer = connect(mapStateToProps)(BestFriends_item)

export default BestFriends_itemContainer;