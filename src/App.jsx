import "./App.css";

// components
import TourCard from "./components/TourCard.jsx";

// material ui
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </>
  );
}

export default App;
