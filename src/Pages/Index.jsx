import React from "react";
import { Hero, Navbar, Projects, About, Footer, Works } from "../Components";
import { Container } from "../Components/style";

const Index = () => {
  return (
    <>
      <Navbar />
    <Container>
      <Hero />
      <About />
      <Works/>
      <Projects />
      <Footer/>
    </Container>
    </>
  );
};

export default Index;
