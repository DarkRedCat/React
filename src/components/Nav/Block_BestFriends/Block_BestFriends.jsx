import BestFriendsItemContainer from './BestFriends_item/BestFriends_itemContainer'
import classes from './Block_BestFriends.module.css';


const BlockBestFriends = () => {
    return (
        <div className={classes.friends}>
            <h1 className={classes.title}>Best Friends</h1>
            <BestFriendsItemContainer />
        </div>
    
    );
};

export default BlockBestFriends;