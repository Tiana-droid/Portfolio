import React from "react";
import { BodyWrap, Content, Grid, Flex, Texts, Outer } from "./style";
import { ProjectDetails } from "./Project";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <BodyWrap>
      <h1>Projects</h1>
      <Outer>
        {ProjectDetails.map((project, index) => {
          return (
            <Content key={index}>
              <div className="img">
                <img src={project.img} alt="" />
              </div>
              <Texts className="texts">
                <h3>{project.title}</h3>
                <div className="project-description">
                  <p>{project.content}</p>
                  <Flex  justifyContent='space-between'>
                    {/* <p>{project.techs}</p> */}
                    <ul>
                      <Flex>
                        {project.techs.map((tech, i) => {
                          return (
                            <li key={i}>
                              {tech}
                            </li>
                          );
                        })}
                      </Flex>
                    </ul>
                  </Flex>
                </div>
                <div className="project-link">
                  <a href="/">
                    <FiGithub />
                  </a>
                  <a href="/">
                    <FiExternalLink />
                  </a>
                </div>
              </Texts>
            </Content>
          );
        })}
      </Outer>
    </BodyWrap>
  );
};

export default Projects;
