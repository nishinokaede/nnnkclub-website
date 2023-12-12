import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Music from "./pages/music";
import Profile from "./pages/profile";
import Schedule from "./pages/schedule";
import Videos from "./pages/videos";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/profile/detail";
import Test from "./pages/test/test";
import MusicDetail from "./pages/music/detail";

export default function App() {
  return <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/details/:id" element={<Detail/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/music/details" element={<MusicDetail/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
}
