import { createBrowserRouter } from "react-router-dom";
import UserHomeLayout from "../layouts/UserHomeLayout";
import HomePage from "../pages/user/HomePage";
import CategoriesPage from "../pages/user/CategoriesPage";
import CollectionsPage from "../pages/user/CollectionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserHomeLayout />,
    errorElement: <></>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/collections", element: <CollectionsPage /> },
    ],
  },
]);

export default router;
