import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  // {
  //   sectionName: "Libraries and Frameworks",
  //   skills: [
  //     {
  //       name: "Reactjs",
  //       icon: ReactjsSvg,
  //     },
  //     {
  //       name: "Nextjs",
  //       icon: SiNextdotjs,
  //     },
  //     {
  //       name: "Solidjs",
  //       icon: SolidjsSvg,
  //     },
  //     {
  //       name: "React Router Dom",
  //       icon: ReactRouterDomIcon,
  //     },
  //     {
  //       name: "Redux",
  //       icon: ReduxSvg,
  //     },
  //     {
  //       name: "Tailwindcss",
  //       icon: TailwindcssSvg,
  //     },
  //     {
  //       name: "MUI",
  //       icon: MuiSvg,
  //     },
  //     {
  //       name: "Framer motion",
  //       icon: FramerMotionIcon,
  //     },
  //     {
  //       name: "Vite",
  //       icon: ViteSvg,
  //     },
  //     {
  //       name: "Vite PWA",
  //       icon: VitePwaIcon,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Backend",
  //   skills: [
  //     {
  //       name: "Nodejs",
  //       icon: NodejsSvg,
  //     },
  //     {
  //       name: "Express",
  //       icon: SiExpress,
  //     },
  //     {
  //       name: "Socket.io",
  //       icon: SiSocketdotio,
  //     },
  //     {
  //       name: "Flask",
  //       icon: SiFlask,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Databases and ORMs",
  //   skills: [
  //     {
  //       name: "MongoDB",
  //       icon: MongoDBSvg,
  //     },
  //     {
  //       name: "Postgress",
  //       icon: PostgressSvg,
  //     },
  //     {
  //       name: "Prisma",
  //       icon: SiPrisma,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Tools and Technologies",
  //   skills: [
  //     {
  //       name: "Git",
  //       icon: GitSvg,
  //     },
  //     {
  //       name: "Docker",
  //       icon: DockerSvg,
  //     },
  //     {
  //       name: "AWS",
  //       icon: AwsSvg,
  //     },
  //     {
  //       name: "Postman",
  //       icon: PostmanSvg,
  //     },
  //   ],
  // },
];
