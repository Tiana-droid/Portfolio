import { styled } from "styled-components";
import { BreakPoints } from "../utils/Breakpoint";
import Me from "../Assets/snip2.png";

export const Container = styled.div`
  width: 98%;
  margin: auto;
`;
export const BodyWrap = styled.div`
  width: 90%;
  margin: auto;

  /* h1 {
    text-align: center;
    font-size: 1.6rem;
  } */
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? "center" : "")};
  justify-content: ${({ justifyContent }) => (justifyContent ? "center" : "")};
  flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
  gap: ${({ gap }) => (gap ? gap : "3em")};
 flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "nowrap")};
  height: inherit;
  flex-wrap: wrap;
  li {
    list-style: none;
    font-size: 13px;
  }
`;
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  /* justify-items: center; */
`;
export const BarWrapper = styled.div`
  width: 100%;
  height: 68px;

  .logo {
    width: 20%;
    font-weight: 700;
    color: #64ffda;
  }

  .nav {
    .nav-menu {
      display: none;

      @media (${BreakPoints.medium}) {
        display: flex;
        align-items: center;
        gap: 2rem;

        ol {
          width: 300px;
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
            /* &:active {
              text-decoration: underline;
            } */
          }
        }

        .resume-button {
          padding: 0.75rem 1rem;
          color: #64ffda;
          text-decoration: none;
          border: 2px solid #64ffda;
          border-radius: 4px;
        }
      }
    }
    .menu {
      display: block;

      @media (${BreakPoints.medium}) {
        display: none;
      }
    }
  }
`;
export const HeroSection = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30px;

  .obj-summary {
    width: 90%;
    margin: auto;

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
      margin-top: 50px;
    }

    button {
      color: #64ffda;
      background-color: transparent;
      border: 1px solid #64ffda;
      border-radius: 4px;
      padding: 1.05rem 1.75rem;
      font-size: 14px;
      margin-top: 20px;
      cursor: pointer;
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
  display: flex;
  gap: 9rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 1;

  .img {
    width: 100%;
    height: 100%;
    /* position: relative;
    z-index: 1;
    background-color: green; */

    img {
      width: 100%;
      /* filter: blur(5px); */
      object-fit: contain;
    }
  }
  &:nth-child(odd),
  &:nth-child(even) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const Texts = styled.div`
  padding-right: 5px;
  width: 100%;
  height: 200px;

  .project-description {
    background-color: #1c1c1c;
    height: fit-content;
    position: relative;
    z-index: 1;

    &:nth-child(even) {
      left: 20%;
    }
    &:nth-child(odd) {
      position: relative;
    z-index: 1;
      right: 20%;
    }
  }

  .project-link {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    a {
      color: #ddd;
      text-decoration: none;
      font-size: 20px;
    }
  }
`;
