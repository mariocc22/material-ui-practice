/* eslint-disable react/prop-types */
// material ui
import Paper from "@mui/material/Paper";
import {
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { AccessTime } from "@mui/icons-material";

// react router
import { NavLink } from "react-router-dom";

// custom properties
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "11px",
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: "9px",
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <NavLink to={`${tour.id}`} style={{ textDecoration: "none" }}>
          <Paper elevation={3} className="hover-ef">
            <img src={tour.image} alt="tour image" />
            <Box paddingX={1}>
              <Typography component="h2" variant="subtitle1">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime
                  sx={{
                    width: "12.5px",
                  }}
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                {" "}
                <Rating
                  name="read-only"
                  value={tour.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  ({tour.numberOrReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From C ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </NavLink>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
