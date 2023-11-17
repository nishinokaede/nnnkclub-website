import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Contact from "./pages/contact";
import Members from "./pages/members/Members";
import Music from "./pages/music";
import News from "./pages/news";
import Profile from "./pages/profile";
import Schedule from "./pages/schedule";
import Videos from "./pages/videos";
import NotFound from "./pages/404";

function App() {
  return <>
    <Router>
      <Routes>
        {/*<Route path="/" element={<Navigate to="/login"/>}/>*/}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/members" element={<Members/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </>
}

export default App;
