
import Load from '../../../common/Load'
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const Post = (props) => {

    if(!props.userState){return (<div className={classes.profileLoad}><Load props='div' /></div>)}


    let fullName = props.userState.fullName; 
    fullName = fullName.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase(); })

    return (
        <div>
            <div className={classes.banner}>
                {
                    props.userState.userId === 22474
                        ? <img src='https://i.picsum.photos/id/1021/1080/200.jpg?hmac=8UH4yjL7e7ZntbvbKHGqzIBotNwS5Smo7hSCEO6_AiE' alt="banner"/> 
                        : <img src={`https://picsum.photos/1080/200?random=${props.userState.userId}`} alt="alt"/> 
                }
            </div>
           

            <div className={classes.description}>
                <div className={classes.description__avatar}>{!props.userState.photos.large
                    ?  <img src={`https://picsum.photos/80/80?random=${props.userState.userId}`} alt="alt"/> 
                    :  <img src={props.userState.photos.large} alt="alt"/> }
                </div>

                <div className={classes.description__text}>
                    <div className={classes.description__title}>
                        <span>{fullName}</span>
                    </div>

                    <div className={classes.description__subtitle}>
                        <div>{props.userState.contacts.vk
                                ? `VK: ${props.userState.contacts.vk}`: `VK: vk.com/f_to_pay_respect.  `}
                        </div>
                        <div>{props.userState.aboutMe 
                                ? `about me: ${props.userState.aboutMe}`: `about me: Lorem ipsum dolor sit amet.  `}
                        </div>
                        <div className={classes.profileStatus}>
                            <ProfileStatus status='red'/>
                        </div>
                    </div>
                </div>
            </div> 
              
        </div>
    );
};

export default Post;