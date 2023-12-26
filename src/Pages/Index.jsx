import React from "react";
import { Hero, Navbar, Projects, About, Footer, Works } from "../Components";
import { Container } from "../Components/style";

const Index = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Works/>
      <Projects />
      <Footer/>
    </Container>
  );
};

export default Index;
