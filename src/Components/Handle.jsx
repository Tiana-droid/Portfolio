import React from "react";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "styled-components";
import { BreakPoints } from "../utils/Breakpoint";

const Links = [
  {
    icon: <FiGithub />,
    ref: "https://github.com/Tiana-droid",
  },
  {
    icon: <FiTwitter />,
    ref: "https://twitter.com/designorcode?t=Ovvz1fPQxBU4AiuFwaL7Jw&s=09",
  },
  {
    icon: <FiInstagram />,
    ref: "https://t.co/PCqbRKtsA7",
  },
  {
    icon: <FiLinkedin />,
    ref: "https://www.linkedin.com/in/christianah-adelusi-102146196",
  },
  {
    icon: <FaWhatsapp />,
    ref: "https://rb.gy/hx98av",
  },
];
const UL = styled(motion.ul)`
  width: inherit;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 20px;

  @media (${BreakPoints.medium}) {
    width: 30px;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    bottom: 0;
    left: 2%;
  }
`;
const VR = styled.li`
  display: none;

  @media (${BreakPoints.medium}) {
    display: inline-block;
    width: 3px;
    height: 100px;
    background-color: #ddd;
  }
`;
const textVariants = {
    initial: {
      y: 40,
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
const Handle = () => {
  return (
    <UL variants={textVariants}
    initial="initial"
    whileInView="animate">
      {Links.map((link, i) => (
        <motion.li key={i} variants={textVariants}>
          <motion.a href={link.ref} target="blank" variants={textVariants}>
            {link.icon}
          </motion.a>
        </motion.li>
      ))}
      <VR></VR>
    </UL>
  );
};

export default Handle;
