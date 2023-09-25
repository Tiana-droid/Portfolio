import React from 'react'
import { Hero, Navbar, Projects } from '../Components'
import { Container } from '../Components/style'

const Index = () => {
  return (
    <Container>
    <Navbar/>
    <Hero/>
    <Projects/>
    </Container>
  )
}

export default Index