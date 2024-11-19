import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      style={{ backgroundImage: "url('/images/flo10.PN')" }}
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none relative -z-40 flex max-h-[1000px] min-h-[calc(100vh-200px)] flex-col-reverse items-center bg-cover px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:flex-row md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                N&apos;tchandi Touré Sylvie
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Responsable senior de projets éducatifs et sociaux à fort impact
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                Avec un esprit clair et un cœur ouvert, les possibilités de ce
                que Dieu va faire à travers moi sont nombreuses et SANS FIN ❤️
                {/* Skilled in{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>,{" "}
                <span className="font-semibold text-accent">SolidJS</span>, and
                an expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">HTML</span> and{" "}
                <span className="font-semibold text-accent">CSS</span> */}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
      <Image
        width={1024}
        height={1024}
        alt="team work"
        src="/images/flo8.PNG"
        className="h-auto w-full rounded-full object-cover md:w-[50%]"
      />
    </motion.section>
  );
}
