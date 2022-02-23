import React, {Suspense}  from 'react'
import {Routes, Route} from "react-router-dom";
import { connect } from 'react-redux';
import {initializeApp} from './redux/reducer/app-reducer'
import './App.css';

import HeaderContainer from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/Nav"
import Load from './components/common/Load'


import ProfileContainer from './components/Page_body/Profile/ProfileContainer'
import LoginContainer from './components/Page_body/Login/LoginContainer'

const BlockMessagesContainer = React.lazy(() =>  import('./components/Page_body/Block_Messages/Block_MessagesContainer'));
const FindUsersContainer = React.lazy(() => import('./components/Page_body/FindUsers/FindUsersContainer'));
const No = React.lazy(() => import('./components/Page_body/No/No'));



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
                <Route path="/profile/*" element={<ProfileContainer />}/>
                <Route path="/login" element={<LoginContainer />}/>
                <Route path="/messages/*" element={
                  <Suspense fallback={ <div className='lb'><Load props={'div'}/></div>}><BlockMessagesContainer/></Suspense> }/>
                <Route path="/find_users/*" element={
                  <Suspense fallback={ <div className='lb'><Load props={'div'}/></div>}><FindUsersContainer/></Suspense> }/>
                <Route path={"/no/"} element={
                  <Suspense fallback={ <div className='lb'><Load props={'div'}/></div>}><No/></Suspense> }/>
                <Route path={"/"} element={
                  <Suspense fallback={ <div className='lb'><Load props={'div'}/></div>}><No/></Suspense> }/>
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



