import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Skill from '../pages/Skill'
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/detail",
      element: <Detail/>
    },
    {
      path: "/skill",
      element: <Skill/>
    },
]);

export default router