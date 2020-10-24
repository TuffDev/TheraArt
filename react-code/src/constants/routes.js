import Home from "../components/home";
import TherapistPage from "../components/therapists/TherapistPage";
export const routes = [
  {
    path: "/therapists",
    private: false,
    component: TherapistPage,
  },
  {
    path: "/",
    private: false,
    component: Home,
  }
];
