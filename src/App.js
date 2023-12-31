import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AboutMe from "./Components/About-Me/About-Me";
import Resume from "./Components/Resume/Resume";
import Contacts from "./Components/Contacts/Contacts";


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
