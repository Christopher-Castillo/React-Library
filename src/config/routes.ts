import Home from "../pages/Home";
import Shelf from "../pages/Shelf";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/shelf",
      component: Shelf,
      name: "Shelf",
      protected: true,
    },
  ];

export default routes