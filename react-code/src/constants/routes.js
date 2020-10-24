import Home from "../components/home";
import TherapistPage from "../components/therapists/TherapistPage";
export const routes = [
  {
    path: "/",
    private: false,
    component: Home,
  },

  {
    path: "/therapists",
    private: false,
    component: TherapistPage,
  },
];
