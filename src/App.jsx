// components
import Navbar from "./components/Navbar/Navbar";

// pages
import Main from "./layout/Main";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import DataBase from "./pages/DataBase";
import Functions from "./pages/Functions";
import Hosting from "./pages/Hosting";
import MachineLearning from "./pages/MachineLearning";
import Storage from "./pages/Storage";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "authentication",
          element: <Authentication />,
        },
        {
          path: "database",
          element: <DataBase />,
        },
        {
          path: "storage",
          element: <Storage />,
        },
        {
          path: "hosting",
          element: <Hosting />,
        },
        {
          path: "functions",
          element: <Functions />,
        },
        {
          path: "machine-learning",
          element: <MachineLearning />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
