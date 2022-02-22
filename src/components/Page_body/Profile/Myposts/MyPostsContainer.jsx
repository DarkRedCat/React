import {connect} from 'react-redux'
import {addPost,updatePostText} from '../../../../redux/reducer/profile-reducer' 

import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
  return {profilePage : state.profilePage}
}
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost    : (name) => {dispatch(addPost(name))},
    onPostChange : (text) => {dispatch(updatePostText(text))}
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;