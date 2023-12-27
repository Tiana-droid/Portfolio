import React from "react";
import { BodyWrap, HeroSection, Flex } from "./style";
import Handle from "./Handle";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const Footer = () => {
  return (
    <BodyWrap id="contact">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <HeroSection padding="100px 0px 10px 0px">
          <Flex
            justifyContent="center"
            alignItems="center"
            view="grid"
            gap="1em"
          >
            <motion.h1
              style={{ marginBlockEnd: "0em" }}
              variants={textVariants}
            >
              Get in touch
            </motion.h1>
            <motion.p variants={textVariants} style={{ textAlign: "center" }}>
              Looking for new opportunities, experience, exposure <br />{" "}
              Interewsted in participating in mind blowing apps and sites.
            </motion.p>
            <motion.a
              href="mailto:adelusic@gmail.com"
              className="resume-button"
              variants={textVariants}
            >
              Hire me!
            </motion.a>
          </Flex>
          <Flex alignItems="center" justifyContent="center" id="footer">
            <motion.span variants={textVariants}>
              v1 Portfolio Designed and Built by Christianah Adelusi &copy; 2023
            </motion.span>
          </Flex>
        </HeroSection>
      </motion.div>
      <Handle />
    </BodyWrap>
  );
};

export default Footer;
