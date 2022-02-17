import Contact from "./Contact/Contact"
import classes from './Contacts.module.css';


const Contacts = (props) => {
    let contactElements = [2,3,4]
    .map( p => <Contact key={p} id={p} contactInfo={props.state.block_MessagesPage.contact_data} url={`id_${p}`}/>  )

    return (
        <div className={classes.contacts}>
            <h1 className={classes.contacts__title}>dialogs</h1>
            <ul className={classes.list}>
                {contactElements} 
            </ul>
        </div>
    )
}
export default Contacts;