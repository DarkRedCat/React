import {Formik} from 'formik'
import * as yup from 'yup'

import classes from './LoginForm.module.css';



const LoginForm = (props) => {

  const validationsSchema = yup.object().shape({
    email : yup.string().email('Введите верный email').required('обязательно'),
    password : yup.string().min(6,'минимум 6 символов').typeError('должно быть строкой').required('обязательно'),
  })
  return (
    <div className={classes.Login__wrapper}>
      <Formik initialValues={{ password : '', email : ''}} validateOnBlur onSubmit={(values) => {console.log(values)}}
        validationSchema={validationsSchema}>
        {({values,errors,touched, handleChange,handleBlur,isValid,handleSubmit,dirty}) =>{
        let disabled =() =>{if(dirty){if(isValid){return false}else{return true}}else{return true}}
          return(
          <div className={classes.LoginForm}>

            <div>
              <label htmlFor={`email`}>Email:</label> <br/>
              <input className={classes.input} type={`text`} name={`email`} onChange={handleChange} 
                onBlur= {handleBlur} value={values.email}/>
             {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor={`password`}>Password:</label> <br/>
              <input className={classes.input}  type={`password`}name={`password`} onChange={handleChange} 
                onBlur= {handleBlur} value={values.password}/>
             {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>} 
            </div>
            
            <button className={classes.Loginbutton} disabled={disabled()} onClick={handleSubmit} type={`submit`}>Send</button>

          </div> 
        )}}
      </Formik>
    </div>
  );
}

export default LoginForm;