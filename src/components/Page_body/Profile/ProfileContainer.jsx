import React from 'react';
import {connect} from 'react-redux'
import { compose } from 'redux';
import {addPost,updatePostText,setUserProfile,getProfileG,setUserStatusG,updateStatus} from '../../../redux/reducer/Profile_reducer'
// import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

import ProfileInfo from './ProfileInfo/ProfileInfo'
// import MyPosts from "./Myposts/MyPosts"

import classes from './Profile.module.css'

class UserProfileContainer extends React.Component {
  componentDidMount(){
    this.props.getProfileG(this.props.fullprofilePage.gg)
  //  setTimeout(() => {
     this.props.setUserStatusG(this.props.fullprofilePage.gg)
    // }, 1000);
  }
  render(){ 

    return (<div className={classes.cal}>
      <ProfileInfo 
        userState={this.props.profilePage} 
        status={this.props.fullprofilePage.status} 
        updateStatus={this.props.updateStatus}/>
      {/* <MyPosts posts={this.props.fullprofilePage}/>    */}
    </div>);
  }
};

let mapStateToProps = (state) => {return {
  profilePage:state.profilePage.profile, 
  fullprofilePage:state.profilePage
}}

let ProfileContainer = compose(connect(mapStateToProps,{addPost,updatePostText,setUserProfile,getProfileG,setUserStatusG,updateStatus}))(UserProfileContainer)

export default ProfileContainer