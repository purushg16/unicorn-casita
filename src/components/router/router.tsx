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
import AdminSingleProductPage from "../pages/admin/AdminSingleProductPage";
import AdminAddProductPage from "../pages/admin/AdminAddProductPage";
import TermsAndConditionsPage from "../pages/user/TermsAndConditionsPage";
import ShippingPolicyPage from "../pages/user/ShippingPolicyPage";
import CancellationPage from "../pages/user/CancellationPage";

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
      { path: "/termsandcondtions", element: <TermsAndConditionsPage /> },
      { path: "/shippinganddeliverypolicy", element: <ShippingPolicyPage /> },
      { path: "/cancellationorrefundpolicy", element: <CancellationPage /> },
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
      { path: "products/new", element: <AdminAddProductPage /> },
      { path: "products/:id", element: <AdminSingleProductPage /> },
      { path: "categories", element: <AdminCategoriesPage /> },
      { path: "orders", element: <AdminOrdersPage /> },
      { path: "reviews", element: <AdminReviewsPage /> },
    ],
  },
]);

export default router;
