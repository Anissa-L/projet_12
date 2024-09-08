import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="personal-portfolio-banner-area">
        <div className="container">
          <div className="row align-items-center banner">
            <div className="col-lg-6 col-md-12">
              <div className="personal-portfolio-banner-content ">
                {/*<span
                  className="sub-title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Hello I'm
                </span>*/}

                <h1
                  className="title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Lamtalsi Anissa
                </h1>

                <h4
                  className="sub-title-banner"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Développeuse front-end freelance
                </h4>

                <p
                  className="text-banner"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Passionnée par le développement web, je transforme vos idées
                  en réalités digitales. En combinant design et développement,
                  je crée des sites web sur-mesure qui répondent à vos besoins.
                </p>
                <div className="btn-banner-area">
                  <Link
                    href="#contact-section"
                    className=" default-btn-two "
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    Contactez-moi
                  </Link>
                  <Link
                    href="/images/personal-portfolio/cv.pdf"
                    className=" default-btn-three"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    download
                  >
                    Télechargez mon CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
