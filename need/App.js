import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'
import './App.css';


function App() {

  const validationsSchema = yup.object().shape({
    name : yup.string().typeError('должно быть строкой').required('обязательно'),
    secondName : yup.string().typeError('должно быть строкой').required('обязательно'),
    password : yup.string().typeError('должно быть строкой').required('обязательно'),
    confirmPassword : yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('обязательно'),
    email : yup.string().email('Введите верный email').required('обязательно'),
  })

  return (
    <div className="App">
      <Formik
        initialValues={{ name : '', secondName : '', password : '', confirmPassword : '', email : ''}}
        validateOnBlur onSubmit={(values) => {console.log(values)}}
        validationSchema={validationsSchema}
        >
        {({values,errors,touched, handleChange,handleBlur,isValid,handleSubmit,dirty}) =>(
           <div  className={'form'}>
             <div>

               
              <div>
                <label htmlFor={`name`}>Имя</label> <br/>
                {(touched.name && errors.name) 
                  ?  <input className={`${`input`} ${`not`}`} type={`text`} 
                      name={`name`} onChange={handleChange} onBlur= {handleBlur} value={values.name}/>
                  : <input className={`input`} type={`text`} 
                      name={`name`} onChange={handleChange} onBlur= {handleBlur} value={values.name}/>}
                {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor={`secondName`}>Фамилия</label> <br/>
                {(touched.secondName && errors.secondName) 
                  ?  <input className={`${`input`} ${`not`}`} type={`text`} 
                      name={`secondName`} onChange={handleChange} onBlur= {handleBlur} value={values.secondName}/>
                  : <input className={`input`} type={`text`} 
                      name={`secondName`} onChange={handleChange} onBlur= {handleBlur} value={values.secondName}/>}
                {touched.secondName && errors.secondName && <p className={'error'}>{errors.secondName}</p>}
              </div>

              <div>
                <label htmlFor={`email`}>Email</label> <br/>
                {(touched.email && errors.email) 
                  ?  <input className={`${`input`} ${`not`}`} type={`text`} 
                      name={`email`} onChange={handleChange} onBlur= {handleBlur} value={values.email}/>
                  : <input className={`input`} type={`text`} 
                      name={`email`} onChange={handleChange} onBlur= {handleBlur} value={values.email}/>}
                {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor={`password`}>Пароль</label> <br/>
                {(touched.password && errors.password) 
                  ?  <input className={`${`input`} ${`Inputerror`}`} type={`password`} 
                      name={`password`} onChange={handleChange} onBlur= {handleBlur} value={values.password}/>
                  : <input className={`input`} type={`password`} 
                      name={`password`} onChange={handleChange} onBlur= {handleBlur} value={values.password}/>}
                {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
              </div>

              <div>
                <label htmlFor={`confirmPassword`}>Повторите Пороль</label> <br/>
                {(touched.confirmPassword && errors.confirmPassword) 
                  ?  <input className={`${`input`} ${`not`}`} type={`text`} 
                      name={`confirmPassword`} onChange={handleChange} onBlur= {handleBlur} value={values.confirmPassword}/>
                  : <input className={`input`} type={`text`} 
                      name={`confirmPassword`} onChange={handleChange} onBlur= {handleBlur} value={values.confirmPassword}/>}
                {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
              </div>


              

              
              <button disabled={!isValid && !dirty} onClick={handleSubmit} type={`submit`}>Send</button>
             </div>
           </div>
        )}
      </Formik>
    </div>
  );
}

export default App;


/*
 {(values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty) => (
            <div>
              
            </div>
          )}
*/