import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <FeatureCards/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App