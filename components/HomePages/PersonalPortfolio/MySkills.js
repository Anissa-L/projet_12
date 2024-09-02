import React from "react";
import Image from "next/image";

const mySkillsData = [
  {
    image: "/images/personal-portfolio/html.png",
    aosDelay: "200",
  },
  {
    image: "/images/personal-portfolio/css-3.png",
    aosDelay: "300",
  },
  {
    image: "/images/personal-portfolio/sass.png",
    aosDelay: "400",
  },
  {
    image: "/images/personal-portfolio/js.png",
    aosDelay: "500",
  },
  {
    image: "/images/personal-portfolio/react.png",
    aosDelay: "600",
  },
  {
    image: "/images/personal-portfolio/redux.png",
    aosDelay: "700",
  },
  {
    image: "/images/personal-portfolio/github.png",
    aosDelay: "800",
  },
  {
    image: "/images/personal-portfolio/figma.png",
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
                    <h4>{value.title}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
