import classes from './Load.module.css';
let gif = 'https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif';
let  Load = (props)  =>{
  return(
    <div className={classes.congif}>
      <img className={classes.gif}src={gif}alt='img'/>
    </div> 
  )
}
 export default Load