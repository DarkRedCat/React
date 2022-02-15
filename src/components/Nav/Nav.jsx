import {NavLink} from 'react-router-dom';

import classes from './Nav.module.css';

import BlockBestFriends from './Block_BestFriends/Block_BestFriends'
const Nav = () => {
        let arr = [
                {path : "profile",title : "Profile",id : '01'},
                {path : "messages",title : "Messages",id : '02'},
                {path : "music",title : "Music",id : '03'},
                {path : "news",title : "News",id : '04'},
                {path : "find_users",title : "Find users",id : '05'},
                {path : "settings",title : "Settings",id : '06'},       
        ]

        let navLick_item = arr.map(m => {
            return(

                <li key={m.id}  className={classes.navBar__item}>
                    <NavLink className={navData=>navData.isActive ? classes.active : classes.item } 
                        to={`/${m.path}`}>{m.title}</NavLink>
                </li>
            
            )
        })
        
        return (
        <nav className={classes.navBar}>
            {/* className={`${classes.navBar__item} ${classes.navBar__first}`} */}
            <ul>{navLick_item}</ul>
            < BlockBestFriends />
        </nav>
        
    );
};

export default Nav;