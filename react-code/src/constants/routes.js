import Home from "../components/home";
import TherapistPage from "../components/therapists/TherapistPage";
export const routes = [
  
  
  {
    path: "/therapists",
    private: false,
    name: "Therapists",
    component: TherapistPage,
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
    component: TherapistPage
  }
]

