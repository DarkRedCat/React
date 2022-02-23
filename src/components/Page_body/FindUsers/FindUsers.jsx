import classes from './FindUsers.module.css';

import Paginator from './Paginator'
import User from './user'

let  Users = (props)  =>{

  let fun = props.state.findUsers.map(u => {	
    let user = u
    return <User key={user.id} userData={user} state={props.state}></User>
  })
  return(
    <>
      <Paginator state={props.state} />
      <h1 key={'red'} className={classes.user_block_title}>Users</h1>
      <div>{fun}</div>
		</>
  )
}
	

export default Users; 