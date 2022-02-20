
import React from 'react';
import {Formik } from 'formik'
import * as yup from 'yup'

import classes from './SendBlock.module.css';

const Message = (props) => {
    const validationsSchema = yup.object().shape({textarea : yup.string()})
    let addMessage = (text) => {(text !== '') &&  props.store.onAddMessage(props.id.id,text)}
    return (
        <div className={classes.send_block}>
            <Formik initialValues={{ textarea : ''}} validateOnBlur 
                onSubmit={(values) => {addMessage(values.textarea) ;return (values.textarea = '')}}
                validationSchema={validationsSchema}>
                {({values,handleChange,handleBlur,isValid,handleSubmit,dirty}) =>{return(
                    <>
                        <textarea className={classes.textarea} type={`text`} name={`textarea`} 
                            onChange={handleChange} onBlur= {handleBlur} value={values.textarea}/>  
                        <button className={classes.send} disabled={!isValid && !dirty} 
                            onClick={handleSubmit} type={`button`} >Send</button>
                    </> 
                )}}
            </Formik> 

        </div>
    )
}

export default Message;