import { AnimatePresence } from "framer-motion";

import { type SkillPillProps } from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";
// import {
//   PresentationChartLineIcon,
//   ShieldCheckIcon,
//   CubeTransparentIcon,
//   HeartIcon,
// } from "@heroicons/react/24/solid";

// import { SkillCard } from "@/components/skill-card";

const SKILLS = [
  {
    title: "+ 4",
    children: "Années d'Expériences",
  },
  {
    title: "+ 30",
    children: "Clients satisfaits",
  },
  {
    title: "+ 40",
    children: "Projets réalisés",
  },

  {
    title: "+ 2",
    children: "Digital Awards",
  },
];

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  return (
    <section className="overflow-hidden px-6 py-10 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-8 text-xl font-semibold text-accent sm:text-4xl">
          Moi en quelque chiffres
        </h2>
        {skills.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-4">
              <AnimatePresence key={section.sectionName}>
                <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                  {SKILLS.map((props, idx) => (
                    <FadeRight
                      key={`lang-${idx}`}
                      duration={0.4}
                      delay={0.1 + idx * 0.1}
                      whileInView={!isMobileDebonced}
                      className="-z-20"
                    >
                      <div className="group rounded-lg bg-accent/10 p-6 transition-transform duration-300 hover:scale-105">
                        <p className="group-hover:text-primary font-serif text-4xl font-bold text-accent transition-colors">
                          {props.title}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                          {props.children}
                        </p>
                      </div>
                    </FadeRight>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
