import { React /*useRef*/ } from "react";
import { BodyWrap, Content, HeroSection, Flex, Outer } from "./style";
import { ProjectDetails } from "./Project";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { motion /*useInView, useScroll, useTransform*/ } from "framer-motion";

const textVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .8,
      staggerChildren: 0.1,
    },
  },
};

const contentVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .8,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .8,
    },
  },
};

const Projects = () => {
  return (
    <BodyWrap id="jobs">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <HeroSection>
          <motion.h1 variants={textVariants}>View Projects</motion.h1>
          <Outer>
            {ProjectDetails.map((project, index) => {
              return (
                <Content key={index}>
                  <motion.div
                    className="project-contents"
                    variants={contentVariants}
                    initial="initial"
                    whileInView="animate"
                  >
                    <motion.div
                      className="project-description"
                      variants={contentVariants}
                    >
                      <motion.h3 variants={contentVariants}>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={contentVariants}
                        >
                          {project.title}
                        </motion.a>
                      </motion.h3>
                      <motion.p variants={contentVariants}>
                        {project.content}
                      </motion.p>
                      <Flex justifyContent="flex-start" className="outer-div">
                        <motion.ul variants={contentVariants}>
                          <Flex gap="1em" className="inner-div">
                            {project.techs.map((tech, i) => {
                              return (
                                <motion.li
                                  key={i}
                                  variants={contentVariants}
                                >
                                  {tech}
                                </motion.li>
                              );
                            })}
                          </Flex>
                        </motion.ul>
                      </Flex>
                    </motion.div>
                    <motion.div
                      className="project-link"
                      variants={contentVariants}
                    >
                      <motion.a
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={contentVariants}
                      >
                        <FiGithub />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={contentVariants}
                      >
                        <FiExternalLink />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="project-image"
                    initial="initial"
                    variants={imageVariants}
                    whileInView="animate"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={imageVariants}
                    >
                      <motion.img
                        src={project.img}
                        alt=""
                        variants={imageVariants}
                      />
                    </motion.a>
                  </motion.div>
                </Content>
              );
            })}
          </Outer>
        </HeroSection>
      </motion.div>
    </BodyWrap>
  );
};

export default Projects;
