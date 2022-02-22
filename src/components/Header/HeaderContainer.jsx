import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import {setAuthUserData,logout} from '../../redux/reducer/auth-reducer'


class HeaderContainer extends React.Component  {
	render (){return <Header {...this.props} />}
}
const mapStateToProps = (state) => ({
	isAuth : state.auth.isAuth,
	login : state.auth.login
})


export default connect(mapStateToProps, {setAuthUserData,logout})(HeaderContainer);  