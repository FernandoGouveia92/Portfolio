import React, { useEffect } from 'react'
import Introduction from '@/components/introduction'
import Technologies from '@/components/technologies'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contact from '@/components/contact'
import Jobs from '@/components/jobs'
import Projects from '@/components/projects'
import Biografia from '@/components/biografia'

function Presentation() {


  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div>
      <Introduction />
      <Biografia />
      <Jobs />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  )
}

export default Presentation
