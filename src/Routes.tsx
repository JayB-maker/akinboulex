import {
  AboutPage,
  HomePage,
  WorksPage,
  ResumePage,
  StreetSchoolPage,
  CrypcentraPage,
  EnvoyPage,
  KiwiPage,
  SuavePage,
  TravaPage,
} from "./pages";

export const routes = [
  {
    title: "Home Page",
    subRoutes: [],
    component: <HomePage />,
    route: "/",
  },
  {
    title: "About Page",
    subRoutes: [],
    component: <AboutPage />,
    route: "/about",
  },
  {
    title: "Works Page",
    subRoutes: [],
    component: <WorksPage />,
    route: "/works",
  },
  {
    title: "Resume Page",
    subRoutes: [],
    component: <ResumePage />,
    route: "/resume",
  },
  {
    title: "Street School Page",
    subRoutes: [],
    component: <StreetSchoolPage />,
    route: "/street-school",
  },
  {
    title: "Crypcentra Page",
    subRoutes: [],
    component: <CrypcentraPage />,
    route: "/crypcentra",
  },
  {
    title: "Envoy Page",
    subRoutes: [],
    component: <EnvoyPage />,
    route: "/envoy",
  },
  {
    title: "Kiwi Page",
    subRoutes: [],
    component: <KiwiPage />,
    route: "/kiwi",
  },
  {
    title: "Suave Page",
    subRoutes: [],
    component: <SuavePage />,
    route: "/suave",
  },
  {
    title: "Trava Page",
    subRoutes: [],
    component: <TravaPage />,
    route: "/trava",
  },
];
