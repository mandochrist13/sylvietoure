import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import Clients from "@/components/client";
import { useEffect, useState } from "react";
import Preloader from "@/components/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Définir un délai pour simuler le chargement de la page, puis désactiver le loader
    const timer = setTimeout(() => setLoading(false), 6000); // Exemple de 2 secondes

    // Nettoyer le timer en cas de démontage
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <NextSeo
        title="Christanelle Mayoukou | Référente digitale"
        description="Découvrez le portfolio professionnel de Christanelle Mayoukou, experte en digitalisation et stratégie de communication. Créer, former et transformer avec sens et excellence."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Christanelle Mayoukou - Responsable de projet",
          description:
            "Découvrez le portfolio professionnel de Christanelle Mayoukou, experte en digitalisation et stratégie de communication. Créer, former et transformer avec sens et excellence.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Christanelle Mayoukou - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      {loading && <Preloader />}
      <LandingHero />
      <Clients />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
