import React, { useEffect } from 'react'
import Introduction from '@/components/introduction'
import Technologies from '@/components/technologies'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contact from '@/components/contact'
import WorkExperience from '@/components/workExperience'

function Presentation() {


  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <div>
      <Introduction />
      <WorkExperience />
      <Technologies />
      <Contact />
    </div>
  )
}

export default Presentation