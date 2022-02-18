// import classes from './Login.module.css';
import LoginForm from './LoginForm/LoginForm'
import { reduxForm } from "redux-form";
const LoginReduxFrom = reduxForm({form : 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;