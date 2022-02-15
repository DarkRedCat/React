import classes from './Header.module.css';
const Header = () => {
  return (
			<header className={classes.header}>
				<div className={classes.header__logo}>
					<img src="https://via.placeholder.com/150/000000/FF0000?text=WTF" alt="Logo"/>
				</div>
			</header>
  );
};


export default Header;  