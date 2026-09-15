import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./Home.tsx";
import { CartPage } from "./pages/cart";
import { LoginPage } from "./pages/login";
import { ProductPage } from "./pages/products";
import { ProfilePage } from "./pages/profile";
import { RegisterPage } from "./pages/register";
import { UseRefPage } from "./pages/useRef";
import { UseStatePage } from "./pages/usestate/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/cart",
    element: <CartPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/products",
    element: <ProductPage />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/useref",
    element: <UseRefPage />,
  },

  {
    path: "/usestate",
    element: <UseStatePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
