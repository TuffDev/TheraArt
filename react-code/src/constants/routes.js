import Home from "../components/home";

export const routes = [
  {
    path: "/home",
    name: "Home",
    private: false,
    component: Home
  },
  {
    path: "/therapists",
    private: false,
    name: "Therapists",
    component: Home,
  },
  {
    path: "/about",
    private: false,
    name: "About",
    component: Home,
  },
  {
    path: "/",
    private: false,
    component: Home
  }
]