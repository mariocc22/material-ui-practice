// components
import { Outlet } from "react-router-dom";

// react router
import Navbar from "../components/Navbar/Navbar";

// material ui
import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid container>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Grid>
  );
};

export default Main;
