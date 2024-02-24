import React from 'react'
import Welcome from './Welcome'
import Achievement from './Achievement'
import Team from './Team'

const About = () => {
  return (
    <div className='padding-container max-container text-gray-10 text-sm lg:text-base'>
      <Welcome/>
      <Achievement/>
      <Team/>
    </div>
  )
}

export default About
