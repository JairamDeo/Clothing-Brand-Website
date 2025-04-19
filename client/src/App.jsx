import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";

import Ladies from './Screens/Ladies';
import Men from './Screens/Men';
import Home from './Screens/Home';
import Kids from './Screens/Kids';
import AuthPage from './Authentication/AuthPage';

function App() {

  return (
    <Router>
      <div>
      <Navbar/>  
        <Routes>
          <Route exact path='/' element={<Ladies/>}/>
          <Route exact path='/men' element={<Men/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/kids' element={<Kids/>}/>
          <Route exact path='/auth' element={<AuthPage/>}/>
        </Routes>
      <Footer/>   
      </div>
    </Router>
  )
}

export default App
