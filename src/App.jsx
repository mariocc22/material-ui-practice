// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// style
import "./App.css";

// layout
import Main from "./layout/Main";

// pages
import Homepage from "./components/Homepage";
import TourPage from "./components/TourPage";

function App() {
  // 1. create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: ":tourId",
          element: <TourPage />,
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
