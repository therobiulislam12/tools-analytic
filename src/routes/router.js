import { createHashRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../components/Dashboard/Dashboard";
import PaidTools from "../components/PaidTools/PaidTools";

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "paid-tools-analytic",
        element: <PaidTools />,
      },
    ],
  },
]);

export default router;
