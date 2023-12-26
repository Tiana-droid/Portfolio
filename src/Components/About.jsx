import React from "react";
import { BodyWrap, HeroSection, Texts, Grid } from "./style";
import Me from "../Assets/profile-copy.jpeg";
import { motion } from "framer-motion";

const Links = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Styled Components",
  "NodeJs",
  "Rest APIs",
  "Sass",
  "Redux",
];

const textVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .6,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <BodyWrap id="about">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <HeroSection>
          <Grid>
            <Texts>
              <motion.h1 variants={textVariants}>About</motion.h1>

              <motion.p variants={textVariants}>
                Hello! My name is Christianah and I enjoy creating things that
                live on the internet. My interest in web development started
                back in 2012 when I was introduced to it in JSS3 where we
                created a sign up page for the school and this sparked an
                interest and passion web development
              </motion.p>
              <motion.p variants={textVariants}>
                Fast-forward to today, and I’ve had the privilege of working at
                an a FinTech company as an intern, an EduTech company and built
                some personal projects. My main focus these days is building
                accessible, inclusive products and digital experiences a
                reputable company for a variety of clients.
              </motion.p>
              <motion.p variants={textVariants}>
                Here are a few technologies I’ve been working with recently:
              </motion.p>

              <motion.ul variants={textVariants}>
                {Links.map((link, i) => (
                  <motion.li key={i} variants={textVariants}>
                    {link}
                  </motion.li>
                ))}
              </motion.ul>
            </Texts>

            <motion.div className="about-image" variants={textVariants}>
              <img src={Me} alt="Profile" />
            </motion.div>
          </Grid>
        </HeroSection>
      </motion.div>
    </BodyWrap>
  );
};

export default About;
