import { React, useState, /*useEffect*/  } from "react";
import { BarWrapper, Flex } from "./style";
import { FaBars } from "react-icons/fa";
import { styled } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Head = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  z-index: 10;
  background-color: #1c1c1c;
  top: 0;
`;
const NavLinks = [
  {
    link: "#about",
    desc: "About",
  },
  {
    link: "#experience",
    desc: "Experience",
  },
  {
    link: "#jobs",
    desc: "Projects",
  },
  {
    link: "#contact",
    desc: "Contact",
  },
];
const Navbar = () => {
  // const [innerWidth, setInnerWidth] = useState(0);

  // const handleResize = () => {
  //   setInnerWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const [draw, setDraw] = useState(false);

  const Drawer = () => {
    setDraw(!draw);
  };

  const variantsDesktop = {
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.1, }
    },
    hidden: {opacity: 0}
  }

  const variantsMobile = {
    visible: {
      opacity: 1,
      transition: {staggerChildren: 0.2}
    },
    hidden: {
      opacity: 0,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }

  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 50,
      opacity: 0
    }
  }
  

  return (
    <Head>
        <BarWrapper>

          <Flex as={motion.div} justifyContent="space-between" alignItems="center">
            <motion.div className="logo"
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: .5, delay: .5}}
            >
              <motion.a href="/" whileHover={{opacity: .7}}>{`</>dev.C</>`}</motion.a>
            </motion.div>
            <motion.div className="nav" >
              <div className="menu" onClick={Drawer}>
                <FaBars />
              </div>
              <div className="nav-menu">
                <motion.ol initial='hidden' animate='visible' variants={variantsDesktop}>
                  {NavLinks.map((nav, index) => (
                    <motion.li key={index} variants={variantsDesktop}>
                      <HashLink to={nav.link}>{nav.desc}</HashLink>
                    </motion.li>
                  ))}
                </motion.ol>

                <motion.a
                  className="resume-button"
                  target="blank"
                  href="http://bit.ly/christy_resume"
                  initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1}}
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>

          </Flex>

            {draw && (
              <div className="backdrop" onClick={Drawer}>
              <motion.div className="sidenav" 
              animate={{y: draw ? 15 : -15}}
              transition={{ ease: "easeOut", duration: .6 }} 
              >
                <motion.ul initial='hidden' animate='visible' variants={variantsMobile}>
                  {NavLinks.map((nav, index) => (
                    <motion.li key={index} onClick={Drawer} variants={variantsMobile}>
                      <motion.a href={nav.link} variants={itemVariants}>{nav.desc}</motion.a>
                    </motion.li>
                  ))}
                </motion.ul>

                <a
                  className="resume-button"
                  target="blank"
                  href="http://bit.ly/christy_resume"
                >
                  Resume
                </a>
              </motion.div>
              </div>
            )}
        </BarWrapper>
    </Head>
  );
};

export default Navbar;
