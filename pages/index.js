import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/PersonalPortfolio/MainBanner";
import MyAllProjects from "../components/HomePages/PersonalPortfolio/MyAllProjects";
import MySkills from "../components/HomePages/PersonalPortfolio/MySkills";
import MyEducationAndExperience from "../components/HomePages/PersonalPortfolio/MyEducationAndExperience";

import ContactForm from "../components/HomePages/PersonalPortfolio/ContactForm";

import FooterDark from "../components/Layouts/FooterDark";

const PersonalPortfolio = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <MyAllProjects />

      <div className="separate-border" />

      <MySkills />

      <div className="separate-border" />

      <MyEducationAndExperience />

      <div className="separate-border" />

      <ContactForm />

      <FooterDark />
    </>
  );
};

export default PersonalPortfolio;
