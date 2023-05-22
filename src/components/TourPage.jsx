// material ui
import { Container, Typography, Box } from "@mui/material";
import ImageCollage from "./ImageCollage";

// components
import CustomizedAccordions from "./AccordionCustom";

const TourPage = () => {
  return (
    <>
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
          Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
            alt="vegas"
            style={{ width: "50%" }}
          />
          <ImageCollage />
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            marginTop={3}
            sx={{
              lineHeight: "2.5",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            vel molestias nostrum exercitationem qui porro quam inventore fugiat
            reiciendis eum? Temporibus, at facilis! Quam eum hic, modi
            temporibus quae a rem culpa consectetur sequi repellendus itaque
            asperiores. Accusamus, earum laborum!
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            component="h4"
            marginTop={3}
            marginBottom={3}
          >
            Frequently Asked Questions
          </Typography>
          <CustomizedAccordions />
        </Box>
      </Container>
    </>
  );
};

export default TourPage;
