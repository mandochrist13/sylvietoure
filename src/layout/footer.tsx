// import ContactButton from "@/components/contact-form/contact-button";
import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { useState } from "react";

export default function Footer() {
  // const [isVisible, setIsVisible] = useState(false);
  // const [scrollY, setScrollY] = useState(0);
  // const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //       }
  //     },
  //     { threshold: 0.1 },
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-2 text-background sm:p-12 md:gap-12 md:p-8 lg:p-20">
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="">
              <p className="text-coral font-mono text-sm font-bold uppercase tracking-[0.3em]">
                <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
                  {""}Entrer en contact
                </span>
              </p>
              <h2 className=" text-5xl font-bold leading-tight text-white md:text-6xl">
                Parlons de
                <br />
                <span className="text-white">Votre Projet</span>
              </h2>
            </div>
            <div>
              <p className=" text-xl leading-relaxed text-white">
                Prêt à transformer votre présence digitale ? Discutons de vos
                objectifs et créons ensemble une stratégie sur mesure.
              </p>
            </div>

            <div className="rounded-lg bg-white p-2 transition-colors duration-300 md:p-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Email
              </p>
              <a
                href="mailto:christanellemayoukou@gmail.com"
                className="font-mono text-xl text-accent underline  transition-colors"
              >
                christanellemayoukou@gmail.com
              </a>
            </div>

            <div className="rounded-lg bg-white p-2 transition-colors duration-300 md:p-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Téléphone
              </p>
              <a
                href="tel:+2417704296"
                className="font-mono text-xl text-accent underline transition-colors"
              >
                (241) 77 04 29 65
              </a>
            </div>

            <div className="rounded-lg bg-white p-2 transition-colors duration-300 md:p-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">
                Localisation
              </p>
              <p className="font-mono text-xl text-accent">Libreville, Gabon</p>
            </div>
          </div>

          <div className={`rounded-2xl bg-white p-8 shadow-2xl lg:p-12 `}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-bold uppercase tracking-widest text-accent"
                >
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 font-mono transition-colors focus:border-accent focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-bold uppercase tracking-widest text-accent"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 font-mono transition-colors focus:border-accent focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-bold uppercase tracking-widest text-accent"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full resize-none rounded-lg border-2 border-border bg-background px-4 py-3 font-mono transition-colors focus:border-accent focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-primary-foreground hover:bg-primary/90 hover:shadow-primary/50 w-full rounded-lg bg-accent px-8 py-4 text-sm uppercase tracking-widest shadow-lg transition-all duration-300 hover:scale-105"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2025 Christanelle Mayoukou</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
