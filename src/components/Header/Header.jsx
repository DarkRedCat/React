import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = (props) => {
  return (
			<header className={classes.header}>
				<div className={classes.header__logo}>
					<img src="https://via.placeholder.com/150/000000/FF0000?text=WTF" alt="Logo"/>
				</div>
				<div className={classes.loginBlock}>
					{props.isAuth
						?  <div>{props.login} - <button onClick={() => {props.logout()}}>Log out</button></div>
						: <NavLink to='./login'>Login</NavLink>

					}
				</div>
			</header>
  );
};


export default Header;  