import Load from '../../../common/Load'
import classes from './ProfileInfo.module.css';


const Post = (props) => {
    if(!props.userState){return (
        <div className={classes.profileLoad}>
            <Load />
        </div>
    )}


    let fullName = props.userState.fullName; 
    fullName = fullName.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase(); })
    
   
    return (
        <div>
            <div className={classes.banner}>
                <img src="https://picsum.photos/1080/200/" alt="banner"/>
            </div>
           

            <div className={classes.description}>
                <div className={classes.description__avatar}>
                     <img src={props.userState.photos.small} alt='c' />
                </div>

                <div className={classes.description__text}>
                    <div className={classes.description__title}>
                        <span>{fullName}</span>
                    </div>

                    <div className={classes.description__subtitle}>
                        about me: {props.userState.aboutMe}<br/>
                        VK : {props.userState.contacts.vk}<br/>
                    </div>
                </div>
            </div> 
              
        </div>
    );
};

export default Post;