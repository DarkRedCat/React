import {connect} from 'react-redux'
import  ProfileInfo from './ProfileInfo'


let mapStateToProps = (state) => {
  return {userState : state.block_MessagesPage.myData}
}
const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;













