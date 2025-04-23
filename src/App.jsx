import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
    </div>
  )
}

export default App