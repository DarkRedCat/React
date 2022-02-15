import {NavLink} from 'react-router-dom';
import classes from './Contact.module.css';

const Contact = (props) => {

  let nav  = props.contactInfo.map(m =>{
      if(props.id ===  m.id){
        return(
          <li key={m.id} className={`${classes.contacts__item} ${'contacts__item'}`}>
            <NavLink  className={navData => navData.isActive ? classes.active : classes.item} 
                to={`/messages/${props.url}`}>
                <div className={classes.contacts__avatar}>
                    <img src={m.avatar} alt='1'/>
                </div>
                <div>{m.name}</div>
            </NavLink>
          </li>
        )
      }
  })
  return <div>{nav}</div>
}

export default Contact;