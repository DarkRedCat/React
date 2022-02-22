import React from 'react';
import {connect} from 'react-redux'
import { compose } from 'redux';
import {addPost,setUserProfile,getProfileG,setUserStatusG,updateStatus} from '../../../redux/reducer/profile-reducer'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./Myposts/MyPosts"

import classes from './Profile.module.css'

class UserProfileContainer extends React.Component {
  componentDidMount(){ 
    let userId =  this.props.fullprofilePage.gg
    if(!userId ){userId = 2}

      this.props.getProfileG(userId)
      this.props.setUserStatusG(userId)
  
    
  }
  render(){ 
    return (<div className={classes.cal}>
      <ProfileInfo userState={this.props.profilePage} status={this.props.fullprofilePage.status} 
        updateStatus={this.props.updateStatus}/>
      <MyPosts profilePage={this.props.fullprofilePage} fun={{addPost : this.props.addPost}}/>   
    </div>);  
  }
};

let mapStateToProps = (state) => {return {
  profilePage:state.profilePage.profile, 
  fullprofilePage:state.profilePage
}}

let ProfileContainer = compose(connect(mapStateToProps,{addPost,setUserProfile,getProfileG,setUserStatusG,updateStatus}),withAuthRedirect)(UserProfileContainer)

export default ProfileContainer