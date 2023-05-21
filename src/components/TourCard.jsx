// material ui
import Paper from "@mui/material/Paper";
import { Grid, Typography, Box, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://images.unsplash.com/photo-1630051822408-b80dde2f5681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="nintendo"
        />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            Immerse into the Falls
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
              5 hours
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
              value={4.5}
              readOnly
              precision={0.5}
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
