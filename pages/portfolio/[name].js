import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../components/Portfolio/PortfolioDetailsContent";

import projects from "../../data/projets.json";
import FooterDark from "../../components/Layouts/FooterDark";

// Générer les chemins dynamiques pour chaque projet
export async function getStaticPaths() {
  const paths = projects.projets.map((project) => ({
    params: { name: project.name },
  }));

  return { paths, fallback: false };
}

// Récupérer les données du projet correspondant au paramètre "name"
export async function getStaticProps({ params }) {
  // Ajoutez un console.log pour vérifier les paramètres reçus
  console.log("Paramètres reçus dans getStaticProps:", params);

  const project = projects.projets.find((p) => p.name === params.name);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}

const PortfolioDetails = ({ project }) => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={project.title}
        BGImage="/images/page-banner2.webp"
      />

      <PortfolioDetailsContent project={project} />

      <FooterDark />
    </>
  );
};

export default PortfolioDetails;
