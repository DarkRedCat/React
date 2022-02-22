import {NavLink} from 'react-router-dom';
import classes from './BestFriends_item.module.css';


const BestFriends_items = (props) => {


    let bestFriends = ['2','4']
    let people = props.navBar.contact_data
    let bestFriendsItem = bestFriends.map(bf => {
        let person ={}
        people.map(i => {
            if(parseInt(bf) === i.id){person = i;return person}  
        })
        return (
          
            <NavLink key={bf} to={`/messages/id_${[bf]}`}>
                        
                 <div className={classes.bestFriendsItem}>
                     <div className={classes.bestFriends_avatar}>
                         <img src={`${person.avatar}`} alt="01"/>
                     </div>
                     <div className={classes.bestFriends_name}>
                         {person.name}
                     </div>
                 </div>

            </NavLink>
        )
    })


    return <div className={classes.bestFriendsItem_block}>{bestFriendsItem}</div>;
};

export default BestFriends_items;