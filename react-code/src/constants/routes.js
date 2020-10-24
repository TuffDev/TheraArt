import Home from "../components/home";
import TherapistPage from "../components/therapists/TherapistPage";
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
    component: TherapistPage,
  }
];
