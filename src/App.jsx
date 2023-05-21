import "./App.css";

// components
import TourCard from "./components/TourCard.jsx";
import SearchAppBar from "./components/AppBar";

// material ui
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

// data
import cities from "./data/dataCards.json";

function App() {
  return (
    <>
      <SearchAppBar />
      <Container
        sx={{
          marginY: "3rem",
        }}
      >
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
              key={city.id}
            >
              Top {city.name} tours
            </Typography>
            <Grid container spacing={1}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}

export default App;
