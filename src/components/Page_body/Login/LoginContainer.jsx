import {connect} from 'react-redux'
import {login,logout} from '../../../redux/reducer/Auth_reducer' 
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
  isAuth: state.auth.isAuth,
  isError : state.auth.error
}}

let LoginContainer = connect(mapStateToProps,{login,logout})(Login)
export default  LoginContainer

