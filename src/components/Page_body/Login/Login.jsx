import LoginForm from './LoginForm/LoginForm'

import { Navigate } from 'react-router-dom'

const Login = (props) => {
    if(props.isAuth) { return <Navigate replace to="/profile" />}
    return (
        <div >
            <h1>Login</h1>
            <LoginForm fun={props}/>
        </div>
    
    )
}
export default Login;