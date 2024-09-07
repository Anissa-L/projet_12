import React from "react";

import Image from "next/image";

const mySkillsData = [
  {
    image: "/images/personal-portfolio/html-c.png",
    title: "HTML 5",
    aosDelay: "200",
  },
  {
    image: "/images/personal-portfolio/css-3-c.png",
    title: "CSS 3",
    aosDelay: "300",
  },
  {
    image: "/images/personal-portfolio/sass-c.png",
    title: "SASS",
    aosDelay: "400",
  },
  {
    image: "/images/personal-portfolio/js-c.png",
    title: "JavaScript",
    aosDelay: "500",
  },
  {
    image: "/images/personal-portfolio/react-c.png",
    title: "React",
    aosDelay: "600",
  },
  {
    image: "/images/personal-portfolio/redux-c.png",
    title: "Redux",
    aosDelay: "700",
  },
  {
    image: "/images/personal-portfolio/github-c.png",
    title: "Github",
    aosDelay: "800",
  },
  {
    image: "/images/personal-portfolio/figma-c.png",
    title: "Figma",
    aosDelay: "900",
  },
];

const MySkills = () => {
  return (
    <>
      <div id="skills-section" className="pp-skills-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title style-two"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h2>Mes compétences</h2>
          </div>

          <div className="row justify-content-center">
            {mySkillsData &&
              mySkillsData.map((value, i) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 container-icon-skills"
                  key={i}
                >
                  <div
                    className="pp-skills-box"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={50}
                      height={10}
                    />
                  </div>
                  <h4>{value.title}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MySkills;
