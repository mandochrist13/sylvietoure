import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Ecole 241",
    href: "/projects",
    tags: [
      "Simplon",
      "Ambassade de france",
      "AFD",
      "Organisation Internationale de la Francophonie",
    ],
    image: {
      LIGHT: "/images/projects/ecole241.png",
      DARK: "/images/projects/ecole241.png",
    },
  },
  {
    index: 1,
    title: "Ecole 241 Business",
    href: "/projects",
    tags: [
      "Simplon",
      "Ambassade de france",
      "AFD",
      "Organisation Internationale de la Francophonie",
    ],
    image: {
      LIGHT: "/images/projects/business.png",
      DARK: "/images/projects/business.png",
    },
  },
  {
    index: 2,
    title: "Ecole 241 Kids",
    href: "/projects",
    tags: [
      "Simplon",
      "Ambassade de france",
      "AFD",
      "Organisation Internationale de la Francophonie",
    ],
    image: {
      LIGHT: "/images/projects/kids.png",
      DARK: "/images/projects/kids.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Ecole 241",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/ecole241.png",
      "/images/projects/ecole241.png",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Ecole 241 Business",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/business.png",
      "/images/projects/business.png",
      "/images/projects/business.png",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "Ecole 241 Kids",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/kids.png",
      "/images/projects/kids.png",
      "/images/projects/kids.png",
      "/images/projects/kids.png",
      "/images/projects/kids.png",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
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
