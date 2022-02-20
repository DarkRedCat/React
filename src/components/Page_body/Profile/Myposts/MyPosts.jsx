import {Formik } from 'formik'
import * as yup from 'yup'

import classes from './MyPosts.module.css';
import Post from "./Post/Post"


const MyPosts = (props) => {
    const validationsSchema = yup.object().shape({textarea : yup.string()})
    
    let postsDataElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message}/>);

    let Addmessage = (text) => {(text !== '') && props.fun.addPost(text);}

    return ( 
        <div>  
            <div className={classes.post}>
                <h2 className={classes.post__title}>My Posts</h2>
                <div className={classes.post__form}>
                <Formik initialValues={{ textarea : ''}} validateOnBlur 
                    onSubmit={(values) => {Addmessage(values.textarea) ;return (values.textarea = '')}}
                    validationSchema={validationsSchema}>
                    {({values,handleChange,handleBlur,isValid,handleSubmit,dirty}) =>{return(
                        <>
                            <textarea className={classes.textarea} type={`text`} name={`textarea`} 
                                onChange={handleChange} onBlur= {handleBlur} value={values.textarea}/>  
                            <button className={classes.post__form__btn} disabled={!isValid && !dirty} 
                                onClick={handleSubmit} type={`button`} >Click Me</button>
                        </> 
                    )}}
                </Formik> 

                </div>
            </div>

            <div className={classes.messages}>
                {postsDataElements}
            </div>
        </div>
    );
}

export default MyPosts;
