import { createBrowserRouter } from "react-router-dom";
import UserHomeLayout from "../layouts/UserHomeLayout";
import HomePage from "../pages/user/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserHomeLayout />,
    errorElement: <></>,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
