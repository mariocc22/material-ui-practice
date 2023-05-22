// components
import TourCard from "./TourCard.jsx";

// material ui
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

// data
import cities from "../data/dataCards.json";

const Homepage = () => {
  return (
    <Container
      sx={{
        marginY: "3rem",
      }}
    >
      {cities.map((city) => (
        <div key={city.id}>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} tours
          </Typography>
          <Grid container spacing={1}>
            {city.tours.map((tour, index) => (
              <TourCard tour={tour} key={index} />
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default Homepage;
