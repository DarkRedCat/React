import classes from './FindUsers.module.css';
import {NavLink} from 'react-router-dom';
let  Users = (props)  =>{


  let  pagesCount =  Math.ceil(props.state.totalUsersCount / props.state.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {pages.push(i)}

 
  let pageFun = pages.map(p => {
    let CP = props.state.currentPage;

    if(p === 1){
      return(
        <div key={p} className={classes.selectPage}>
          <span className={(CP === p)? classes.active : ''} onClick={(e)=>{props.state.PageChanged(p)}}id={p}>{p}</span>
          <div>...</div>
        </div>
      )
    }

    if(p === CP ||p === CP +1 || p === CP -1){
      if ( p !== pagesCount && p !==1){
        return(
          <div key={p} className={classes.selectPage}>
            <span className={(CP === p)? classes.active : ''} onClick={(e)=>{props.state.PageChanged(p)}} id={p}>{p}</span>
          </div>
        )
      }
    }

    if(p === pagesCount){
      return(
        <div key={p} className={classes.selectPage}>
          <div>...</div>
          <span className={(CP === p)? classes.active : ''} onClick={(e)=>{props.state.PageChanged(p)}}id={p}>{p}</span>
        </div>
      )
    }
  
  })

  let fun = props.state.findUsers
    .map(u => {	
      return(
        <div key={u.id - 1} className={classes.wrapp}>
          <div className={classes.left}>
        
            <div className={classes.avatar}>
              
              <NavLink to={`/profile/id_${u.id}`} onClick={() => {props.state.gg(u.id)}}>{
                u.photos.small 
                ? <img src={`${u.photos.small}`} alt="1" />
                : <img src={`https://picsum.photos/80/80?random=${u.id}`} alt="1" />}
              </NavLink>
             </div>
        
              <div className={classes.button}>{(u.followed)
                ? <button onClick={() => {props.state.unFollow(u.id)}}>unfolowed</button> 
                : <button onClick={() => {props.state.follow(u.id)}}>followed</button>}
              </div>

          </div>
          
            <div className={classes.right}>
              <div className={classes.head}><h2>{u.name}</h2></div>
              <div className={classes.nothead}><p>userId : {u.id}</p></div>
            </div>
          
        </div>

       
      )
  })

  return(
    <>
					<div>{pageFun}</div>
					<h1 className={classes.user_block_title}>Users</h1>
					<div>{fun}</div>
		</>
  )


}
	
export default Users;

