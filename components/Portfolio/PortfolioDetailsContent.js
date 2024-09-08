import React from "react";
import Image from "next/image";

const PortfolioDetailsContent = ({ project }) => {
  return (
    <>
      <div className="portfolio-details ptb-100">
        <div className="container container-detail-portfolio">
          {/*<div className="container-img-infos">*/}
          <div className="pd-preview-img">
            <Image
              src={project.image}
              alt={project.title}
              width={1320}
              height={900}
            />
          </div>

          <div className="service-details-info">
            <div className="single-info-box">
              <a href={project.github} className="default-btn" target="_blank">
                Github
              </a>
              {/*} </div>*/}
              {project.site && (
                <div className="single-info-box">
                  <a
                    href={project.site}
                    className="default-btn"
                    target="_blank"
                  >
                    Voir le projet
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="portfolio-desc style-2">
            <h3>Scénario</h3>

            <p>{project.scenario}</p>

            <h3>Description</h3>
            <p>{project.description}</p>

            <h3>Compétences acquises lors du projet</h3>
            <div className="competences-list">
              {project.competences.map((competence, index) => (
                <div key={index} className="competence-item">
                  <div className="competence-item-logo">
                    <Image
                      src={competence.image}
                      alt={competence.title}
                      width={50}
                      height={50}
                    />
                    <h4>{competence.title}</h4>
                  </div>
                  <p>{competence.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
