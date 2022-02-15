import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"

/*pages*/
import ProfileContainer from "./components/Page_body/Profile/ProfileContainer"
import Messages from "./components/Page_body/Block_Messages/Block_Messages"
// import Music from "./components/Page_body/Music/Music"
// import News from "./components/Page_body/News/News"
import FindUsersContainer from "./components/Page_body/FindUsers/FindUsersContainer"
// import Settings from "./components/Page_body/Settings/Settings"


import './App.css';
import {Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav />
      <main className="pageBody__content">
        <Routes>
          <Route path={"/profile/*",'/*'} element={<ProfileContainer />}/>
          <Route path="/messages/*" element={ <Messages  />}/>
          {/* <Route path="/music" element={< Music />}/>
          <Route path="/news" element={< News />}/>*/}
          <Route path="/find_users/*" element={ <FindUsersContainer  />}/>
          {/* <Route path="/settings" element={< Settings />}/> */}
        </Routes>
      </main>
    </div>
 );
}; 

export default App;