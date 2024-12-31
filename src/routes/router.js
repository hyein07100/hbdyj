import { createBrowserRouter } from "react-router-dom";
import Main from '../pages/main/Main.js';
import MyLetter from '../pages/letter/MyLetter.js';
import SelectLetter from "../pages/letterSelect/SelectLetter.js";
import GumaLetter from "../pages/letter/GumaLetter.js";
import DongleLetter from "../pages/letter/DongleLetter.js";
import Board from "../pages/board/Board.js";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/selectLetter',
    element:<SelectLetter />
  },
  {
    path:'/myletter',
    element:<MyLetter />
  },
  {
    path:'/gumaletter',
    element:<GumaLetter />
  },
  {
    path:'/dongleletter',
    element:<DongleLetter />
  },
  {
    path:'/board',
    element: <Board/>
  }
]);

export default router;