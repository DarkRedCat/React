import * as axios from 'axios';
import React from 'react';
import {connect} from 'react-redux'
import classes from './FindUsers.module.css';
import Load from '../../common/Load'

import {follow,unFollow,setUsers,setCurrentPage,
    setTotalUserCount,toggleisFetching} from '../../../redux/reducer/FindUsers_reducer' 



import FindUsers from './FindUsers'

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.toggleisFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=
                ${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then(response => {
            this.props.toggleisFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)				
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleisFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=
                ${pageNumber}&count=${this.props.pageSize}`
        )
        .then(response => {
            this.props.setUsers(response.data.items)
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
        isFetching : state.findUsers.isFetching
     }
}

const FindUsersContainer = connect(mapStateToProps, {
    follow,unFollow,setUsers,setCurrentPage,
    setTotalUserCount,toggleisFetching

})(UsersContainer)

export default FindUsersContainer;