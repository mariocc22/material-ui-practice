// react router
import { Outlet } from "react-router";

// components
import SearchAppBar from "../components/AppBar";

const Main = () => {
  return (
    <>
      <SearchAppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
