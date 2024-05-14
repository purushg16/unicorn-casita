import { Navigate, createBrowserRouter } from "react-router-dom";
import UserHomeLayout from "../layouts/UserHomeLayout";
import HomePage from "../pages/user/HomePage";
import CategoriesPage from "../pages/user/CategoriesPage";
import CollectionsPage from "../pages/user/CollectionsPage";
import SingleProductPage from "../pages/user/SingleProductPage";
import CartPage from "../pages/user/CartPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminProductsPage from "../pages/admin/AdminProductsPage";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";
import AdminReviewsPage from "../pages/admin/AdminReviewsPage";
import AdminCategoriesPage from "../pages/admin/AdminCategoriesPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserHomeLayout />,
    errorElement: <></>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/collections", element: <CollectionsPage /> },
      { path: "/product/:id", element: <SingleProductPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
  { path: "/adminLogin", element: <AdminLoginPage /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <></>,
    children: [
      { index: true, element: <Navigate to="/admin/products" /> },
      { path: "products", element: <AdminProductsPage /> },
      { path: "categories", element: <AdminCategoriesPage /> },
      { path: "orders", element: <AdminOrdersPage /> },
      { path: "reviews", element: <AdminReviewsPage /> },
    ],
  },
]);

export default router;
