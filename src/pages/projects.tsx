import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Amit Chauhan - Software Developer Portfolio"
        description="Explore a collection of projects by Amit Chauhan, a seasoned Software Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Amit Chauhan - Software Developer",
          description:
            "Explore a showcase of projects crafted by Amit Chauhan, a Software Developer. Witness the fusion of creativity and technology in web development.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Amit Chauhan - Portfolio Image",
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
              "Projects,Amit Portfolio, Software Developer, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projets
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Il y&apos;a quelques uns de mes projets que j&apos;aimerais vous
              partager
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="mt-8 max-w-3xl text-center font-serif text-lg font-semibold italic text-zinc-800 dark:text-zinc-300 sm:text-xl md:text-2xl">
              Au milieu des imperfections de la vie, nous trouvons la force dans
              la foi et la miséricorde divine. Reconnaître nos défauts passés,
              chercher à corriger le présent et demander des conseils pour
              l&apos;avenir est un acte d&apos;humilité et d&apos;abandon.
              J&apos;apprends tellement durant ce temps de mise à part 🙏
            </span>
            {/* <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
