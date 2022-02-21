import React from 'react';
import {connect} from 'react-redux'
import classes from './FindUsers.module.css';
import Load from '../../common/Load'

import {getUsersThunk,unFollow,follow} from '../../../redux/reducer/FindUsers_reducer' 
import { getFindUsers,getPageSize,getTotalUsersCount,getCurrentPage ,getIsFetching ,getFollowingInProgress,} from '../../../redux/reducer/selectors/FindUsers-selectors'
import {gg} from '../../../redux/reducer/Profile_reducer'


// import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'
import FindUsers from './FindUsers'
class UsersContainer extends React.Component {
    
    componentDidMount(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}
    onPageChanged= pageNumber =>{this.props.getUsersThunk(pageNumber,this.props.pageSize)}

    render() { 
        let state = {
            findUsers : this.props.findUsers,
            totalUsersCount: this.props.totalUsersCount,
            pageSize: this.props.pageSize,
            currentPage : this.props.currentPage,

            PageChanged : this.onPageChanged,
            gg : this.props.gg, // удатите уту херню

            followingInProgress : this.props.followingInProgress,
        
            unFollow :this.props.unFollow ,
            follow : this.props.follow
        }
       
    return(
        <div className={classes.user_block}>
            {this.props.isFetching ? <Load props='div'/>:null}
            <FindUsers state={state} />
        </div>
     
    )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         findUsers: state.findUsers.Users,
//         pageSize: state.findUsers.pageSize,
//         totalUsersCount: state.findUsers.totalUsersCount,
//         currentPage : state.findUsers.currentPage,
//         isFetching : state.findUsers.isFetching,
//         followingInProgress : state.findUsers.followingInProgress,
//      }
// }

let mapStateToProps = (state) => {
    return {
        findUsers: getFindUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage :  getCurrentPage(state),
        isFetching :getIsFetching(state),
        followingInProgress :getFollowingInProgress(state),      
     }
}


let FindUsersContainer= compose(connect(mapStateToProps,{gg,getUsersThunk,unFollow,follow}))(UsersContainer)



export default FindUsersContainer