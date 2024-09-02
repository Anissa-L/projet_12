import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import LA from "../../public/images/personal-portfolio/la.png";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image src={LA} alt="logo la" className="logo-la-navbar" />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Accueil
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    À propos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/portfolio/"
                    className={`nav-link ${
                      currentPath == "/portfolio/" && "active"
                    }`}
                  >
                    Portfolio
                  </Link>

                  {/*<ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio/portfolio-details/" &&
                          "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>
                  </ul>*/}
                </li>
                <li className="nav-item">
                  <Link
                    href="#skills-section"
                    className={`nav-link ${
                      currentPath == "#skills-section" ? "active" : ""
                    }`}
                  >
                    Mes compétences
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#diplôme-section"
                    className={`nav-link ${
                      currentPath == "#diplôme-section" ? "active" : ""
                    }`}
                  >
                    Mes diplômes
                  </Link>
                </li>
              </ul>

              <div className="others-options">
                <Link href="#contact-section" className="btn btn-primary">
                  Contactez-moi
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
