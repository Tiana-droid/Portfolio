import React from "react";
import { BarWrapper, BodyWrap, Flex } from "./style";
import { FaBars } from "react-icons/fa";
import { styled } from "styled-components";

const Head = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Navbar = () => {
  return (
    <Head>
      <BodyWrap>
        <BarWrapper>
          <Flex>
            <div className="logo">{`</>dev.C</>`}</div>
            <div className="nav">
              <div className="menu">
                <FaBars />
              </div>
              <div className="nav-menu">
                <ol>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Projects</a></li>
                  <li><a href="/">Skills</a></li>
                  <li><a href="/">Contact</a></li>
                </ol>
                
                <a className="resume-button" href="/">Resume</a>
              </div>
            </div>
          </Flex>
        </BarWrapper>
      </BodyWrap>
    </Head>
  );
};

export default Navbar;
