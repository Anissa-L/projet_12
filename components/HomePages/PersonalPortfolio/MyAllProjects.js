import React from "react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "../../../data/projets.json";

const MyAllProjects = () => {
  return (
    <>
      <div id="portfolio" className="pp-works-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <h2>Mes projets</h2>
          </div>

          <div className="row justify-content-center">
            {projectsData &&
              projectsData.projets.map((projet) => (
                <div className="col-lg-4 col-sm-6 col-md-6" key={projet.id}>
                  <div
                    className="pp-works-box"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={projet.aosDelay}
                  >
                    <Image
                      src={projet.image}
                      alt="image"
                      width={860}
                      height={860}
                    />
                    <div className="text-portfolio">
                      <h3>{projet.title}</h3>
                      <h4>
                        Voir plus
                        <Link
                          href={`/portfolio/${projet.name}`}
                          className="link-btn"
                        ></Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAllProjects;
