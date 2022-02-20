import HeaderContainer from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/Nav"

/*pages*/
import ProfileContainer from "./components/Page_body/Profile/ProfileContainer"
import Block_MessagesContainer from "./components/Page_body/Block_Messages/Block_MessagesContainer"
import FindUsersContainer from "./components/Page_body/FindUsers/FindUsersContainer"
import LoginContainer from './components/Page_body/Login/LoginContainer'
import No from './components/Page_body/No/No'


import './App.css';
import {Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Nav />
      <main className="pageBody__content">
        <Routes>
          <Route path={"/profile/*"} element={<ProfileContainer />}/>
          <Route path="/messages/*" element={ <Block_MessagesContainer/>}/>
          <Route path="/find_users/*" element={ <FindUsersContainer/>}/>
          <Route path="/login" element={ <LoginContainer/>}/>
          <Route path={"/no/"} element={<No/>}/><Route path={"/"} element={<No/>}/>
        </Routes>
      </main>
    </div>
 );
}; 

export default App;