import React from 'react'
import About from '../../components/about/About'
import Roadmap from '../../components/roadmap/Roadmap'
// import Team from '../../components/team/Team'

import './main.css'

const Main = () => {
  return (
    <div className='main'>
      <About />
      <Roadmap />
    </div>
  )
}

export default Main
