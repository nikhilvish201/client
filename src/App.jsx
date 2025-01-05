import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import About from './pages/about';
import Profile from './pages/profile';

export default function App() {
  return  <BrowserRouter>
  <Routes>
    <Route path="/" elements={<Home />} />
    <Route path="/sign-in" elements={<SignIn/>} />
    <Route path="/sign-up" elements={<SignUp/>} />
    <Route path="/about" elements={<About/>} />
    <Route path="/profile" elements={<Profile/>} />
  </Routes>
       </BrowserRouter>;
  }
