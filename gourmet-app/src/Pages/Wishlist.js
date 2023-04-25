import { Button, Grid, ThemeProvider } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { theme } from "../Components/Theme";
import Navbar from "../Components/Navbar";

const Wishlist = () => {
  const handleAddtoCart = () => {
    console.log("Add to cart");
  };

  const handleRemove = () => {
    console.log("Remove");
  };

  const description = `This is a media card. You can use this section to describe the content.`;
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Grid
          sx={{
            marginTop: "10rem",
            marginLeft: "4rem",
          }}
          container
          justifyContent="left"
        >
          <Grid container xs={12} md={8} style={{}}>
            <Typography variant="h4" align="left" gutterBottom>
              User's Wishlist
            </Typography>
            <Card sx={{ minWidth: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="food photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Food Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description.length <= 150
                    ? description
                    : description.substring(0, 150) + "..."}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    sx={{ marginTop: "1rem" }}
                    variant="contained"
                    color="primary"
                    onClick={handleAddtoCart}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    sx={{ marginTop: "1rem", marginLeft: "1rem" }}
                    variant="contained"
                    color="secondary"
                    onClick={handleRemove}
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Wishlist;
