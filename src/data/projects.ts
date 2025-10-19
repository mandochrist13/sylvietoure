import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Association ADN",
    href: "/projects",
    image: {
      LIGHT: "/images/projects/caxa.jpg",
      DARK: "/images/projects/caxa.jpg",
    },
  },
  {
    index: 1,
    title: "Ruby Academie",
    href: "/projects",
    image: {
      LIGHT: "/images/projects/5th.jpg",
      DARK: "/images/projects/5th.jpg",
    },
  },
  {
    index: 2,
    title: "E-learning",
    href: "/projects",
    image: {
      LIGHT: "/images/projects/business.png",
      DARK: "/images/projects/business.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Ruby Academie",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/5th.jpg",
      // "/images/projects/5th.jpg",
    ],
    description: "",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://ecole241.online/",
  },
  {
    name: "E-learning",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/business.png",
      // "/images/projects/business.png",
      // "/images/projects/business.png",
    ],
    description: " ",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://ecole241busi.netlify.app/",
  },
  {
    name: "Ecole 241 Kids",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/caxa.jpg"],
    description: " ",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://241kids.vercel.app/",
  },
  // {
  //   name: "S241",
  //   favicon: "/favicon.ico",
  //   imageUrl: [
  //     "/images/projects/portfolioDark.webp",
  //     "/images/projects/portfolioLight.webp",
  //   ],
  //   description:
  //     "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
  //   liveWebsiteHref: siteMetadata.siteUrl,
  // },
  // {
  //   name: "5 Colos.com",
  //   favicon: "/images/projects/logos/covidtracker.ico",
  //   imageUrl: [
  //     "/images/projects/covidTracker.webp",
  //     "/images/projects/covidTrackerMap.webp",
  //     "/images/projects/covidTrackerTable.webp",
  //   ],
  //   description:
  //     "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
  //   liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  // },
  // {
  //   name: "Stock predictor",
  //   favicon: "/images/projects/logos/stockpredictor.ico",
  //   imageUrl: [
  //     "/images/projects/stockPredictor.webp",
  //     "/images/projects/stockPredictorCandleChart.webp",
  //     "/images/projects/stockPredictorCompareChart.webp",
  //     "/images/projects/stockPredictorLineChart.webp",
  //   ],
  //   description:
  //     "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
  //   sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  // },
];
