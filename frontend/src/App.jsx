import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Customers from "./pages/customers/Customers";
import Transactions from "./pages/transactions/Transactions";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "transactions",
          element: <Transactions />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
