import React from "react";
import Navbar from "../components/Layouts/Navbar";
import ErrorContent from "../components/Error/ErrorContent";
import FooterDark from "../components/Layouts/FooterDark";

const Error = () => {
  return (
    <>
      <Navbar />

      <ErrorContent />

      <FooterDark />
    </>
  );
};

export default Error;
