import React from "react";
import { HeroSection, BodyWrap } from "./style";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .6,
      staggerChildren: 0.1,
      delay: .5,
    },
  },
}

const Hero = () => {


  return (
    <BodyWrap>
        <HeroSection>
          <div className="pic">
            <motion.div className="obj-summary" variants={textVariants} initial='initial' whileInView='animate'>
              <motion.h3 variants={textVariants}>Hi, my name is</motion.h3>
              <motion.h1 variants={textVariants}>Christianah Adelusi.</motion.h1>
              <motion.h6 variants={textVariants}>A Frontend Developer.</motion.h6>
              <motion.p variants={textVariants}>
                I’m a software engineer specializing in building exceptional
                digital interfaces and experiences.
              </motion.p>
              <motion.a href="#jobs" className="resume-button" variants={textVariants}>
                Check out my works
              </motion.a>
            </motion.div>
          </div>
        </HeroSection>
    </BodyWrap>
  );
};

export default Hero;
