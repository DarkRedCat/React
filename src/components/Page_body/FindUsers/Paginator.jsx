import classes from './FindUsers.module.css';




let  Paginator = (props)  =>{
  let  pagesCount =  Math.ceil(props.state.totalUsersCount / props.state.pageSize)
  
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {pages.push(i)}


  let pageFun = pages.map(p => {
    let CP = props.state.currentPage;

    if(p === 1){ return(<div key={p} className={classes.selectPage}><span className={(CP === p)? classes.active : ''} onClick={(e)=>{props.state.PageChanged(p)}}id={p}>{p}</span><div>...</div></div>)}

    if(p === CP ||p === CP +1 || p === CP -1){if ( p !== pagesCount && p !==1){return(<div key={p} className={classes.selectPage}><span className={(CP === p)? classes.active : ''} onClick={(e)=>{props.state.PageChanged(p)}} id={p}>{p}</span></div>)}}

    if(p === pagesCount){return(<div key={p} className={classes.selectPage}><div>...</div><span className={(CP === p)? classes.active : ''} onClick={(e)=>{props.state.PageChanged(p)}}id={p}>{p}</span></div>)}
  
  }) 

  return <div>{pageFun}</div>

}
	

export default Paginator;