import React from "react";
import { HeroSection, BodyWrap, Flex } from "./style";

const Hero = () => {
  return (
    <BodyWrap>
      <HeroSection>
        <Flex>
        </Flex>
          <div className="pic">
          <div className="obj-summary">
            <h3>Hi, my name is</h3>
            <h1>Christianah Adelusi.</h1>
            <h6>A Frontend Developer.</h6>
            <p>
            I’m a software engineer specializing in building exceptional digital interfaces and experiences.
            </p>
            <button>Hire me!</button>
          </div>
            
          </div>
      </HeroSection>
    </BodyWrap>
  );
};

export default Hero;
