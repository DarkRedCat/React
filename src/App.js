import HeaderContainer from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/Nav"

/*pages*/
import ProfileContainer from "./components/Page_body/Profile/ProfileContainer"
import Messages from "./components/Page_body/Block_Messages/Block_Messages"

import FindUsersContainer from "./components/Page_body/FindUsers/FindUsersContainer"



import './App.css';
import {Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Nav />
      <main className="pageBody__content">
        <Routes>
          <Route path={"/profile/*",'/*'} element={<ProfileContainer />}/>
          <Route path="/messages/*" element={ <Messages/>}/>
         
          <Route path="/find_users/*" element={ <FindUsersContainer/>}/>
        </Routes>
      </main>
    </div>
 );
}; 

export default App;