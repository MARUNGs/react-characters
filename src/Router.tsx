import { createBrowserRouter } from "react-router-dom";
import Root from "./App";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Detail from "./pages/Detail";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "character/:id",
        element: <Detail />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
