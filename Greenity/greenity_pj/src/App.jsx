import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingIntro from './Section/Intro';
import LandingLearnMore from './Section/LearnMore';
import LandingHero from './Section/Hero';
import LandingFooter from './Layout/Footer';
import LandingAboutus from './Section/About';
import ScrollToTop from './utils/ScrollToTop';
import Survey from './Section/Survey';


const Home = () => (
  <>
    <LandingIntro />
    <LandingLearnMore />
    <LandingHero />
    <LandingFooter />
  </>
)

const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<LandingAboutus />} />
        <Route path='/survey' element={<Survey />} />
      </Routes>
    </Router>
  )
}

export default App