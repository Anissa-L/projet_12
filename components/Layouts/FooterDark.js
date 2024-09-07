import React from "react";
import Link from "next/link";
import Image from "next/image";
import LA from "../../public/images/personal-portfolio/la-icone.png";

const FooterDark = () => {
  return (
    <>
      <footer className="footer-area footer-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image src={LA} alt="LA" width={70} height={30} />
                  </Link>
                </div>

                {/*<ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="linkedin.com" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>*/}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Contact</h3>

                <ul className="get-in-touch">
                  <li className="pt-2">
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+33767596228">+33767596228</a>
                  </li>
                  <li className="pt-2">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:lamtalsi.web@gmail.com">
                      lamtalsi.web@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDark;
