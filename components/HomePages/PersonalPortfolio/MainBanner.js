import React from "react";
import Link from "next/link";
//import Image from "next/image";

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
                  Anissa Lamtalsi
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
                  Je transforme vos idées en réalités digitales, en combinant
                  design et développement.
                </p>

                <Link
                  href="/contact-us/"
                  className="default-btn-two"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Consultez mon CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
