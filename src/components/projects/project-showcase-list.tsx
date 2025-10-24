import Link from "next/link";
import { motion } from "framer-motion";
import { classNames } from "@/utility/classNames";

export type ProjectShowcaseListItem = {
  index: number;
  title: string;
  href: string;
  image: {
    LIGHT: string;
    DARK?: string;
  };
};

export interface ProjectShowcaseListProps {
  data: ProjectShowcaseListItem;
  activeProject: number;
  toggleList: (index: number) => void; //eslint-disable-line no-unused-vars
}

export default function ProjectShowcaseList(props: ProjectShowcaseListProps) {
  return (
    <motion.div
      className={classNames("group flex gap-4 ")}
      onHoverStart={() => props.toggleList(props.data.index)}
      onFocus={() => props.toggleList(props.data.index)}
    >
      <div className="flex gap-2">
        <span
          className={classNames(
            "text-[clamp(1.2rem,3vw,3rem)] font-semibold transition-colors duration-300",
            props.activeProject === props.data.index
              ? "text-accent"
              : "text-accent/70",
          )}
        >
          {props.data.index + 1}.
        </span>

        <Link href={props.data.href} className="group relative max-w-max">
          <span
            className={classNames(
              "text-[clamp(2rem,5vw,3rem)] font-semibold transition-colors duration-300",
              props.activeProject === props.data.index
                ? "text-accent"
                : "text-accent/70",
            )}
          >
            {props.data.title}
          </span>
          <span
            className={classNames(
              "absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full lg:block",
              props.activeProject === props.data.index ? "w-full" : "w-0",
            )}
          ></span>
        </Link>

        {/* Tags */}
        {/* <p className="max-w-xl text-base font-semibold text-muted-foreground sm:text-lg">
          {props.data.tags.map((tag) => (
            <span key={tag} className="mr-2 text-accent/80">#{tag}</span>
          ))}
        </p> */}
      </div>
    </motion.div>
  );
}
