import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

import Navbar from "../Components/Navbar";
const Wishlist = () => {
  return (
    <>
      <Navbar />
      <Grid
        sx={{
          marginTop: "10rem",
        }}
        container
        justifyContent="center"
      >
        <Grid container xs={12} md={8} style={{}}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Wishlist;
