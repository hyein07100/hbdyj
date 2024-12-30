import { createBrowserRouter } from "react-router-dom";
import Main from '../pages/main/Main.js';
import MyLetter from '../pages/letter/MyLetter.js';
import SelectLetter from "../pages/letterSelect/SelectLetter.js";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/myletter',
    element:<MyLetter />
  },
  {
    path:'/selectLetter',
    element:<SelectLetter />
  },

]);

export default router;