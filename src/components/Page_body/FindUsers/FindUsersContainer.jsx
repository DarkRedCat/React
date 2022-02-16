import React from 'react';
import {connect} from 'react-redux'
import classes from './FindUsers.module.css';
import Load from '../../common/Load'

import {follow,unFollow,setUsers,setCurrentPage,setTotalUserCount,toggleisFetching,toggleisFollowingInProgress} 
    from '../../../redux/reducer/FindUsers_reducer' 
import {usersAPI} from '../../../api/api'
import {gg} from '../../../redux/reducer/Profile_reducer'


import FindUsers from './FindUsers'
class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.toggleisFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
            this.props.toggleisFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)				
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleisFetching(true)

        usersAPI.getUsers(pageNumber,this.props.pageSize)
        .then(data => {
            this.props.setUsers(data.items)
            this.props.toggleisFetching(false)
        })
    }
    render() { 
        let state = {
            findUsers : this.props.findUsers,
            unFollow : this.props.unFollow,
            follow : this.props.follow,

            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage : this.props.currentPage,

            PageChanged : this.onPageChanged,
            gg : this.props.gg,
            followingInProgress : this.props.followingInProgress,
            toggleisFollowingInProgress : this.props.toggleisFollowingInProgress,
        }
       
    return(
        <div className={classes.user_block}>
        {this.props.isFetching ? <Load/>:null}
        <FindUsers state={state} />
        </div>
     
    )
    }
}

let mapStateToProps = (state) => {
    return {
        findUsers: state.findUsers.Users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage : state.findUsers.currentPage,
        isFetching : state.findUsers.isFetching,
        followingInProgress : state.findUsers.followingInProgress,
     }
}

const FindUsersContainer = connect(mapStateToProps, {
    follow,unFollow,setUsers,setCurrentPage,
    setTotalUserCount,toggleisFetching,gg,toggleisFollowingInProgress

})(UsersContainer)

export default FindUsersContainer;