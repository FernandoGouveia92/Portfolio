import React, { useEffect } from 'react'

import Introduction from '@/components/Introduction'
import Technologies from '@/components/Technologies'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

import { HomeContainer } from '@/styles/Home/tyles'

import 'aos/dist/aos.css'
import Aos from 'aos'

function Presentation() {


  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <HomeContainer>
      <Introduction />
      <Projects />
      <Technologies />
      <Contact />
    </HomeContainer>
  )
}

export default Presentation
