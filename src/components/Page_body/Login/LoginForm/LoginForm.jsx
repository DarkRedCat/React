// import classes from './Login.module.css';
import { Field } from "redux-form";
const LoginForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div><Field name={'login'} 
            placeholder={'login'} component={'input'}/></div>
        <div><Field name={'password'}
            placeholder={'password'} component={'input'}/></div>
        <div><Field name={'remember Me'} 
           type={'checkbox'} component={'input'}/>remember Me</div>

        <div><button>Login</button></div>
      </form>
    )
}

export default LoginForm;