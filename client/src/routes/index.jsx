import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Skill from '../pages/Skill'
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/skill",
      element: <Skill/>
    },
]);

export default router