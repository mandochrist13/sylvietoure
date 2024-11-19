import { AnimatePresence } from "framer-motion";

import { type SkillPillProps } from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import {
  PresentationChartLineIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import { SkillCard } from "@/components/skill-card";

const SKILLS = [
  {
    icon: HeartIcon,
    title: "Amour",
    children:
      "Chaque jour, je me réveille avec un sentiment renouvelé de conviction et j’aspire à être une source d’amour, rayonnant de bonnes vibrations et offrant de la force à ceux qui m’entourent❤️",
  },
  {
    icon: CubeTransparentIcon,
    title: "Integrité",
    children:
      " Être la lumière ne signifie pas attirer les projecteurs sur soi, mais décider de rediriger cette lumière vers les autres est ma mission de vie ❤️",
  },
  {
    icon: PresentationChartLineIcon,
    title: "Excellence",
    children:
      "Chaque jour, je m’efforce d’être une meilleure version de moi-même✨ car La distance entre les rêves et la réalité s’appelle : Action 🔥",
  },

  {
    icon: ShieldCheckIcon,
    title: "Diligence",
    children:
      "Dites vous que pour atteindre ce rêve que vous portez, vous devrez faire preuve de discipline! Et oui, je sais qu’elle n’est guère facile mais pas impossible! Alors, n’oubliez pas qu’avant de récolter avec joie, il faut semer avec diligence ❤️",
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
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl">
          Mes valeurs
        </h2>
        {skills.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-4">
              {/* <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.skills.map((pill, index) => (
                  <FadeRight
                    key={`lang-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebonced}
                    className="-z-20"
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </div> */}
              <AnimatePresence key={section.sectionName}>
                <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                  {SKILLS.map((props, idx) => (
                    <FadeRight
                      key={`lang-${idx}`}
                      duration={0.4}
                      delay={0.1 + idx * 0.1}
                      whileInView={!isMobileDebonced}
                      className="-z-20"
                    >
                      <SkillCard key={idx} {...props} />
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
