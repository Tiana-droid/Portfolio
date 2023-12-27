import { styled } from "styled-components";
import { BreakPoints } from "../utils/Breakpoint";
import Me from "../Assets/snip2.png";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const BodyWrap = styled.div`
  width: 90%;
  margin: 0 auto 30px auto;
  /* overflow: hidden; */

  #footer {
    margin-top: 13em;


    span {
      font-size: 12px;
      letter-spacing: .4px;
      color: #b1b0b0;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
  gap: ${({ gap }) => (gap ? gap : "3em")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "nowrap")};
  height: inherit;
  flex-wrap: wrap;
  li {
    list-style: none;
    font-size: 13px;
  }
  .resume-button {
    padding: 0.75rem 1rem;
    color: #64ffda;
    text-decoration: none;
    border: 2px solid #64ffda;
    border-radius: 4px;
  }

  
`;
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  /* justify-items: center; */

  .about-image {
    background-color: #64fdda;
    width: 300px;
    max-height: 400px;

    img {
      max-width: 300px;
      mix-blend-mode: luminosity;
      filter: brightness(80%);

      &:hover {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
export const BarWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 68px;

  .logo {
    width: 20%;
    font-weight: 700;
  }

  .nav {
    .nav-menu {
      display: none;

      @media (${BreakPoints.medium}) {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        ol {
          width: 350px;
          display: flex;
          justify-content: space-between;
          color: #64ffda;

          a {
            text-decoration: none;
            color: #ddd;
            font-size: 13px;

            &:hover {
              color: #64ffda;
            }
          }
        }
      }
    }
    .menu {
      display: block;
      cursor: pointer;

      @media (${BreakPoints.medium}) {
        display: none;
      }
    }
  }
  .backdrop {
    width: 100%;
    height: 120vh;
    position: absolute;
    top: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    @media (${BreakPoints.medium}) {
      display: none;
    }
  }
  .sidenav {
    position: relative;
    top: 7px;
    right: -55%;
    height: 250px;
    width: 30%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 1em;
    background-color: rgba(0, 0, 0, 0.8);


    

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
          justify-content: space-between;
          color: #64ffda;
          padding-inline-start: 0;
          height: inherit;

          a {
            text-decoration: none;
            color: #ddd;
            font-size: 13px;

            &:hover {
              color: #64ffda;
            }
          }
    }

    .resume-button {
    padding: 0.5rem ;
    color: #64ffda;
    text-decoration: none;
    border: 2px solid #64ffda;
    border-radius: 4px;
    text-align: center;
  }

    @media (${BreakPoints.medium}) {
        display: none;
      }
  }
`;

export const HeroSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: ${({padding}) => (padding ? padding : '100px 0px')};

  @media (max-width: 799px) {
    padding: 50px 0px 0px 0px !important;
  };


  .obj-summary {
    width: 90%;
    margin: auto;
    text-align: center;
    

    @media (${BreakPoints.xl}) {
      width: 70%;
    }

    h1 {
      margin: 0px;
      font-weight: 600;
      font-size: clamp(40px, 8vw, 80px);
    }
    h6 {
      margin: 0;
      margin-top: 5px;
      /* color: rgba(221, 221, 221, 0.7); */
      color: #747885;
      font-size: clamp(40px, 8vw, 70px);
      line-height: 0.9;
    }
    h3 {
      margin: 0px 0px 3px 4px;
      font-size: clamp(14px, 3vw, 16px);
      font-weight: 400;
      color: #64ffda;
    }
    p {
      color: #a5a9b6;
      margin: 50px 0px;
    }

    a {
      color: #64ffda;
      background-color: transparent;
      border: 1px solid #64ffda;
      border-radius: 4px;
      padding: 1.05rem 1.75rem;
      font-size: 14px;
      /* cursor: pointer; */
    }
  }

  .pic {
    display: flex;
    width: 100%;
    height: 90vh;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      url(${Me});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;

    @media screen and (max-height: 600px) {
      height: 120vh;
    }
  }
`;
export const Outer = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 800px) {
    width: 97%;
  }
`;

export const Content = styled.div`
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;

  .project-image {
    width: 100%;
    height: 100%;
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
    z-index: -1;

    @media (max-width: 850px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25 !important;
    }

    a {
      display: inline-block;
      width: 100%;
      height: 99%;
      /* position: relative;
      z-index: 5; */
      background-color: #a1c4bb;
      vertical-align: middle;

      &:hover,
      &:focus {
        background-color: transparent;
      }
    }

    img {
      width: 100%;
      object-fit: contain;
      mix-blend-mode: multiply;
      /* filter: grayscale(100%) contrast(1) brightness(90%); */

      &:hover,
      &:focus {
        filter: none;
      }

      @media (max-width: 850px) {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  &:nth-of-type(2n + 1) .project-image {
    grid-column: 1 / 8;

    @media (max-width: 850px) {
      grid-column: 1 / -1;
    }
  }

  .project-contents {
    padding-right: 5px;
    width: 100%;
    height: 200px;
    position: relative;
    grid-area: 1 / 1 / -1 / 7;

    .project-description {
      background-color: transparent;
      height: fit-content;
      position: relative;
      z-index: 2;

      a {
        color: #ddd;
        text-decoration: none;
      }

      p {
        background-color: #1c1c1c;
        padding: 25px;
        width: 92%;
        height: fit-content;
        font-size: clamp(14px, 1vw, 16px);

        @media (max-width: 850px) {
          background-color: transparent;
          padding: 0px;
          width: 95%;
          /* margin: auto; */
        }
      }

      ul {
        padding: 0;
      }
      @media (max-width: 850px) {
        .inner-div,
        .outer-div {
          justify-content: flex-start;
        }
      }
    }

    .project-link {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;

      a {
        color: #ddd;
        text-decoration: none;
        font-size: 20px;
      }

      @media (max-width: 850px) {
        justify-content: flex-start;
      }
    }

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 5px 30px;
      z-index: 5;
    }
  }

  &:nth-of-type(2n + 1) .project-contents {
    grid-column: 7 / -1;
    text-align: right;

    .outer-div {
      justify-content: flex-end;
    }
    .project-link {
      justify-content: flex-end;
    }

    @media (max-width: 1080px) {
      grid-column: 5 / -1;
    }

    @media (max-width: 850px) {
      grid-column: 1 / -1;
      padding: 40px 5px 30px;
      text-align: left;

      .outer-div {
        justify-content: flex-start;
      }
      .project-link {
        justify-content: flex-start;
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 12em;

    @media (max-width: 850px) {
      margin-bottom: 5em;
    }
  }
`;

export const Texts = styled.div`
margin-bottom: 3em;
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-size: 12px;
      color: #b1b0b0;

      &::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: #64ffda;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
`;

export const TabSection = styled.section`
  width: 100%;
  /* overflow: hidden; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 2rem;
  justify-items: start;

 
  @media (${BreakPoints.small}) {
    /* width: 70%; */
    flex-direction: row;
  }
  @media (min-width: 850px) {
    width: 70%;
    flex-direction: row;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin-top: 1em;

    &::-webkit-scrollbar {
      width: 10px !important;
      margin-top: 10px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 10px;
    }

    @media (${BreakPoints.small}) {
      flex-direction: column;
      overflow-x: hidden;
    }
  }

  button {
    border-top: none;
    border-bottom: none;
    border-right: none;
    outline: none;
    text-decoration: none;
    text-align: left;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;

    @media (${BreakPoints.xs}) {
      border-left: none;
    }

    &:hover {
      background-color: #1c1c1c !important;
    }
  }

  h3 {
    margin-block-end: 10px;

    a {
      color: #64ffda;

      &:hover {
        text-decoration: 1px underline #64ffda solid;
      }
    }
  }
  ul {
    margin: 0px;
    padding: 0;
    margin-top: 20px;
  }
  li {
    list-style: none;
    display: flex;
    align-items: baseline;
    gap: 10px;
    /* list-style-position: outside; */

    &::before {
      content: "▹";
      color: #64ffda;
      font-size: 12px;
      line-height: 12px;
    }
  }
`;
