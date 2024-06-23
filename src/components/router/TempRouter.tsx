import { createBrowserRouter } from "react-router-dom";
import OutofServicePage from "../pages/service/OutofServicePage";

const TempRouter = createBrowserRouter([
  {
    path: "*",
    element: <OutofServicePage />,
  },
]);

export default TempRouter;
