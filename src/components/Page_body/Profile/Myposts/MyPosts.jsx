import classes from './MyPosts.module.css';
import Post from "./Post/Post"


const MyPosts = (props) => {

    
    let postsDataElements = props.profilePage.posts
        .map(p => <Post key={p.id} message={p.message}/>);

    let buttonClick = () => {
        if(props.profilePage.newPostText !== ''){
            props.addPost(props.profilePage.myData.name)    
        }
    };
    let onPostChange = (e) => {
        props.updatePostText(e.target.value)
    }


    return ( 
        <div>  
            <div className={classes.post}>
                <h2 className={classes.post__title}>My Posts</h2>
                <div className={classes.post__form}>
                    <textarea className={classes.textarea}  
                      placeholder="Your news..." value={props.profilePage.newPostText} 
                      onChange={onPostChange}/>

                    <button className={classes.post__form__btn} 
                      onClick ={buttonClick}>click me</button>
                </div>
            </div>

            <div className={classes.messages}>
                {postsDataElements}
            </div>
        </div>
    );
}

export default MyPosts;
