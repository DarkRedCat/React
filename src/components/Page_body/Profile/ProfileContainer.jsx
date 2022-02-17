import React from 'react';
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {addPost,updatePostText,setUserProfile,getProfileG} from '../../../redux/reducer/Profile_reducer'


import ProfileInfo from './ProfileInfo/ProfileInfo'
// import MyPosts from "./Myposts/MyPosts"

import classes from './Profile.module.css'

class UserProfileContainer extends React.Component {
  componentDidMount(){this.props.getProfileG(this.props.fullprofilePage.gg)}
  render(){ 
    if(this.props.isAuth) return <Navigate to='/login'/>

    return (<div className={classes.cal}>
      <ProfileInfo userState={this.props.profilePage}/>
      {/* <MyPosts posts={this.props.fullprofilePage}/>    */}
    </div>);
  }
};

let mapStateToProps = (state) => {
  return {
    profilePage : state.profilePage.profile,
    fullprofilePage : state.profilePage,
    isAuth : state.auth.isAuth
  
  }
}
const ProfileContainer = connect(mapStateToProps,{addPost,updatePostText,setUserProfile,getProfileG})(UserProfileContainer)


export default ProfileContainer;