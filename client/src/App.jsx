import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Suspense, lazy } from 'react';

// Static components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Lazy-loaded screens
const Ladies = lazy(() => import('./Screens/Ladies'));
const Men = lazy(() => import('./Screens/Men'));
const Home = lazy(() => import('./Screens/Home'));
const Kids = lazy(() => import('./Screens/Kids'));
const AuthPage = lazy(() => import('./Authentication/AuthPage'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
          <Routes>
            <Route exact path='/' element={<Ladies />} />
            <Route exact path='/men' element={<Men />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/kids' element={<Kids />} />
            <Route exact path='/signin' element={<AuthPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
