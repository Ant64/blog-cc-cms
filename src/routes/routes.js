import { News, NewsDetails, Concerts, Biography, Contact } from "../pages";

const routesSchema = [
  {
    title: "News",
    path: "/news/:id",
    subRoute: true,
    component: NewsDetails,
    searchDisabled: false
  },
  {
    title: "News",
    path: "/news",
    component: News,
    searchDisabled: false
  },
  {
    title: "Concerts",
    path: "/concerts",
    component: Concerts,
    searchDisabled: false
  },
  {
    title: "Biography",
    path: "/biography",
    component: Biography,
    searchDisabled: true
  },
  {
    title: "Shop",
    path: "https://crucialcomma.bandcamp.com/releases",
    external: true
  },
  {
    title: "Contact",
    path: "/contact",
    component: Contact,
    searchDisabled: true
  },
];

const searchPathBlacklist = routesSchema
.filter(({ searchDisabled }) => searchDisabled)
.map(({ path }) => path);


const navItems = routesSchema
.filter(({ subRoute }) => !subRoute)

export default routesSchema;
export { searchPathBlacklist, navItems };
