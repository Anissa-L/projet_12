import React from "react";
import Link from "next/link";
import Image from "next/image";

import errorImg from "../../public/images/error.png";

const ErrorContent = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image src={errorImg} alt="Error" width={50} height={50} />
            <h3>Error 404 : La page est introuvable</h3>
            <p>
              La page que vous recherchez a peut-être été supprimée, a été
              renommée ou est provisoirement indisponible.
            </p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                Revenir à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
