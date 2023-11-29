import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import StoryPage from "./pages/StoryPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricesPage from "./pages/PricesPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stories",
        element: <StoryPage />,
      },
      {
        path: "/features",
        element: <FeaturesPage />,
      },
      {
        path: "/prices",
        element: <PricesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
