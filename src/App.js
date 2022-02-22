import HeaderContainer from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/Nav"

/*pages*/
import ProfileContainer from "./components/Page_body/Profile/ProfileContainer"
import BlockMessagesContainer from "./components/Page_body/Block_Messages/Block_MessagesContainer"
import FindUsersContainer from "./components/Page_body/FindUsers/FindUsersContainer"
import LoginContainer from './components/Page_body/Login/LoginContainer'
import No from './components/Page_body/No/No'
import Load from './components/common/Load'
import React  from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import { connect } from 'react-redux';
import {initializeApp} from './redux/reducer/app-reducer'



class  App extends React.Component{
  componentDidMount(){this.props.initializeApp()}
  render () {
    if(this.props.initialState === false){return <Load props={'div'}/>}

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav />
        <main className="pageBody__content">
          <Routes>
            <Route path={"/profile/*"} element={<ProfileContainer />}/>
            <Route path="/messages/*" element={ <BlockMessagesContainer/>}/>
            <Route path="/find_users/*" element={ <FindUsersContainer/>}/>
            <Route path="/login" element={ <LoginContainer/>}/>
            <Route path={"/no/"} element={<No/>}/><Route path={"/"} element={<No/>}/>
          </Routes>
        </main>
      </div>
   );
  }
}; 

let mapStateToProps = (state) => {
  return {
  initialState : state.app.initialized
}}









export default  connect(mapStateToProps,{initializeApp})(App);  



