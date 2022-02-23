import classes from './FindUsers.module.css';




let  Paginator = (props)  =>{
  let  pagesCount =  Math.ceil(props.state.totalUsersCount / props.state.pageSize)

  let CP = props.state.currentPage;
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    
      pages.push(i)
    
  }

  let pageItem = (p,CP,three) =>(
       <div key={p} className={classes.selectPage}>
        {three === 'l' && <span className={classes.more_l}>...</span>}
        <span className={`${(CP === p)? classes.active : ''} ${classes.selectNum}`} 
          onClick={(e)=>{props.state.PageChanged(p)}} id={p}>{p}</span>
        {three === 'r' && <span className={classes.more_r}>...</span>}
      </div>)
  

  let newPageFun = pages.filter(p => p >= CP - 3  && p  <= CP + 3)

  if(!newPageFun.includes(1)){newPageFun.splice(0, 0, 1)}
  if(!newPageFun.includes(pagesCount)){newPageFun.push(pagesCount)}
  
  let pageFun =  newPageFun.map(p => {
    if(p === 1) { return pageItem(p,CP,'r')}
    if(CP === 1){if(p === CP ||p === CP +1 ||p === CP +2 ||p === CP +3){return pageItem(p,CP)}}
    if(CP === 2){if(p === CP ||p === CP +1 ||p === CP +2){return pageItem(p,CP)}}

    if(p === pagesCount) {return pageItem(p,CP,'l')}
    if(CP === pagesCount ){if(p === CP ||p === CP -1 ||p === CP -2 || p  === CP -3){ return pageItem(p,CP)}}
    if(CP === pagesCount -1){if(p === CP ||p === CP -1 ||p === CP -2){return pageItem(p,CP)}}
   
   
    if(p === CP || p === CP-1 || p === CP+1)  {return pageItem(p,CP)}
  }) 

  return <div>{pageFun}</div>

}
	

export default Paginator;