import React from "react";
import { BodyWrap, HeroSection, TabSection } from "./style";
import { useState, useEffect } from "react";
import {  motion } from "framer-motion";

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
      duration: .6,
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
      duration: .6,
    },
  },
};

const TabPanels = [
  {
    tab: "tabA",
    title: "A Blog App Template",
    link: "https://ionic-blog-app.vercel.app/tabs/index",
    role: "Frontend Developer",
    duration: "July 2024",
    tasks: [
      "Ensured that the website design is responsive, providing a seamless experience across various devices and screen sizes",
      "User Authentication: Implemented sign-up, login, and authentication using Firebase Auth.",
      "Create & Edit Posts: I enabled users to create, update, and delete blog posts stored in Firestore.",
      "Image Uploads: Integrated Firebase Storage so users can upload images, and the image URLs are saved in Firestore.",
      "Post Listing & Details: Displayed blog posts in a list format and provide detailed views for individual posts.",
      "Category Filtering: Organized posts by categories and enabled filtering functionality",
    ],
  },
  {
    tab: "tabB",
    title: "Klasshour",
    link: "https://www.klasshour.com",
    role: "Frontend Developer",
    duration: "January - August 2023",
    tasks: [
      "Designed and created user-friendly and visually appealing interfaces for both tutors and students.",
      "Implemented intuitive navigation and interaction patterns to facilitate collaboration, mentoring, and tutoring.",
      "Developed responsive layouts to ensure a seamless user experience across various devices and screen sizes, enabling easy access for tutors and students.",
      "Developed and styled user profile pages, allowing tutors to showcase their expertise and students to view profiles before engaging in collaboration.",
      "Designed and implemented interactive forms for tutor registration and profile creation, ensuring a smooth onboarding process.",
      "Identified and addressed frontend bugs, issues, and inconsistencies to maintain a stable and reliable application.",
      "Worked closely with the backend development team and UI/UX designers to ensure seamless integration and consistent design implementation.",
      "Utilized version control systems like Git and collaborate on code repositories. Deploy the frontend code to production environments.",
      "Wrote clean, maintainable, and well-documented code following best practices and coding standards.",
    ],
  },
  {
    tab: "tabC",
    title: "Rackleblock",
    link: "https://www.rackleblock.com/",
    role: "Frontend Developer",
    duration: "May 2023",
    tasks: [
      "Worked closely with the UI/UX designers to ensure seamless integration and consistent design implementation.",
      "Developed the form using HTML, CSS, and JavaScript, incorporating validation for user input.",
      "Established communication between the frontend and the backend API to send user data.",
      "Implemented HTTP requests to interact with the API endpoints",
      "Implemented client-side form validation to ensure that users provide valid and complete information before submitting.",
      "Implemented asynchronous operations to handle the submission of form data to the API without blocking the user interface.",
      "Developed mechanisms to handle errors that may occur during form submission or API interactions and provided clear error messages.",
      "Created a smooth and responsive user experience by providing feedback such as success message, or error notification on the status of the form submission.",
      "Use Postman for testing the API endpoints independently of the frontend, ensuring they respond as expected.",
    ],
  },
  {
    tab: "tabD",
    title: "SojiTade Foundation",
    link: "https://www.sojitadefoundation.com",
    role: "Website Developer",
    duration: "December 2023",
    tasks: [
      "Developed the user interface using React.js, ensuring a responsive design and smooth navigation.",
       "Established communication between the frontend and the backend API to send user data.",
      "Implemented HTTP requests to interact with the API endpoints.",
      "Developed components to dynamically display product details, images, and prices obtained from the API.",
      "Created intuitive user interface for managing news content.",
     " Improved the efficiency of news and events management within the organization.",
    ],
  },
  {
    tab: "tabE",
    title: "DummyJson",
    link: "https://dummyjson.netlify.app/",
    role: "Frontend Developer",
    duration: "July 2022",
    tasks: [
      "Designed and developed the landing page",
      "Implemented API calls to retrieve product information, pricing, and other necessary data.",
      "Developed components to dynamically display product details, images, and prices obtained from the API.",
      "Ensured that the e-commerce site is responsive, providing a consistent experience across various devices and screen sizes.",
    ],
  },
  {
    tab: "tabF",
    title: "Constructionez",
    link: "https://constructionez.netlify.app/",
    role: "Web Designer",
    duration: "July 2022",
    tasks: [
      "Ensured that the website design is responsive, providing a seamless experience across various devices and screen sizes",
      "Designed an intuitive layout for showcasing the construction company's projects, presenting images and information in an engaging manner.",
      "Implemented a gallery or portfolio section to showcase the construction company's projects, possibly including images, descriptions, and key details for each project.",
    ],
  },
];

const Works = () => {
  const [activeTab, setActiveTab] = useState("tabA");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [innerWidth, setInnerWidth] = useState(0);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BodyWrap id="experience">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <HeroSection>
          <motion.h1 variants={textVariants}>My Roles so far</motion.h1>

          <TabSection>
            <motion.section
              initial="initial"
              variants={imageVariants}
              whileInView="animate"
            >
              {TabPanels.map((tabs, index) => (
                <motion.button
                variants={imageVariants}
                  key={index}
                  onClick={() => handleTabChange(tabs.tab)}
                  role="tab"
                  tabIndex={index}
                  aria-selected={activeTab === tabs.tab ? true : false}
                  style={{
                    width: "150px",
                    height: "42px",
                    color: activeTab === tabs.tab ? "#64ffda" : "#b1b0b0",
                    borderLeft:
                      innerWidth > 640 && activeTab === tabs.tab
                        ? "3px solid #64ffda"
                        : "",
                    // borderBottom:
                    //   innerWidth <= 640 && activeTab === tabs.tab
                    //     ? "3px solid #64ffda"
                    //     : "",
                    gap: innerWidth <= 640 ? "1em" : "0",
                    backgroundColor:
                      activeTab === tabs.tab ? "#1c1c1c" : "transparent",
                    fontWeight: activeTab === tabs.tab ? "600" : "400",
                  }}
                >
                  <motion.span variants={imageVariants}>{tabs.title}</motion.span>
                </motion.button>
              ))}
            </motion.section>
            <motion.main
              variants={contentVariants }
              initial="initial"
              whileInView="animate"
            >
              {TabPanels.map((tabs, index) => (
                <>
                
                  {activeTab === tabs.tab && (
                    <motion.span key={index} variants={contentVariants} whileInView="animate" >
                      <motion.h3 variants={contentVariants}>
                        {tabs.role} <a href={tabs.link}>@{tabs.title}</a>
                      </motion.h3>
                      <motion.span variants={contentVariants}>{tabs.duration}</motion.span>
                      <motion.ul variants={contentVariants}>
                        {tabs.tasks.map((task, index) => (
                          <motion.li key={index} variants={contentVariants}>{task}</motion.li>
                        ))}
                      </motion.ul>
                    </motion.span>
                  )}
                </>
              ))}
            </motion.main>
          </TabSection>
        </HeroSection>
      </motion.div>
    </BodyWrap>
  );
};

export default Works;
