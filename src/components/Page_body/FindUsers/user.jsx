import classes from './FindUsers.module.css';
import {NavLink} from 'react-router-dom';
import Load from '../../common/Load'



let  Users = (props)  =>{
  return(
      <div key={props.userData.id - 1} className={classes.wrapp}>
          <div className={classes.left}>
            <div className={classes.avatar}>
              <NavLink to={`/profile/id_${props.userData.id}`} onClick={() => {props.state.gg(props.userData.id)}}>{props.userData.photos.small 
                  ? <img src={`${props.userData.photos.small}`} alt="1"/>:<img src={`https://picsum.photos/80/80?random=${props.userData.id}`} alt="1" />}
              </NavLink>
            </div>
        
            <div className={classes.button}>{(props.userData.followed)
              ? <button disabled={props.state.followingInProgress.some(id => id === props.userData.id)} 
                  onClick={() => {props.state.unFollow(props.userData.id)}}>{props.state.followingInProgress.some(id => id === props.userData.id)
                    ? <div className={classes.BL}><Load className={classes.load}/> </div>: 'unfolowed'}
                </button>
              : <button disabled={props.state.followingInProgress.some(id => id === props.userData.id)} 
                  onClick={() => {props.state.follow(props.userData.id)}}>{props.state.followingInProgress.some(id => id === props.userData.id) 
                    ? <div className={classes.BL}><Load className={classes.load} /> </div>: 'followed'}
                </button>}
            </div>
          </div>
          
          <div className={classes.right}>
            <div className={classes.head}><h2>{props.userData.name}</h2></div>
            <div className={classes.nothead}><p>userId : {props.userData.id}</p></div>
          </div>
          
        </div>
  )
}
	

export default Users;