import React from "react";

const myEducationData = [
  {
    Organisme: "OpenClassrooms",
    year: "2024",
    category: "Bac +2 Développeuse front-end - intégratrice web",
    aosDelay: "200",
  },
  {
    Organisme: "Lycée Elie Faure",
    year: "2021",
    category: "Bac général S (SVT et Pysique-Chimie)",
    aosDelay: "100",
  },
];

const MyEducationAndExperience = () => {
  return (
    <>
      <div id="diplôme-section" className="short-brief-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="short-brief-content">
                <div className="section-title style-two">
                  <h2>Mes diplômes</h2>
                </div>

                <ul className="timeline">
                  {myEducationData &&
                    myEducationData.map((value, i) => (
                      <li
                        className="timeline-item"
                        key={i}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <div className="timeline-info">
                          <span className="sub-title">
                            {value.Organisme} - <span>{value.year}</span>
                          </span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h3>{value.category}</h3>
                          <p>{value.shortText}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEducationAndExperience;
