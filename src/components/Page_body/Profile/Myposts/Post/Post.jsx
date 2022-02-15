import classes from './Post.module.css';


const Post = (props) => {
  return (
				<div className={classes.message}>
					<div className={classes.message__block}></div>

					<div className={classes.message__content}>
						<div className={classes.message__title}>{`${props.message}`} </div>
					</div>
					
				</div>
  );
};

export default Post;  