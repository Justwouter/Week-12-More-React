import { Boek } from "./components/project/Boek";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/boek',
    element: <Boek />
  },
  {
    path: '/fetch-data',
    element: <Boek />
  }
];

export default AppRoutes;
