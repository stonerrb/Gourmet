import { Button, Grid, ThemeProvider } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { theme } from "../Components/Theme";
import Navbar from "../Components/Navbar";
import "./CSS/Wishlist.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const profile_id = Cookies.get("userid");
    async function fetchData() {
      try {
        let profile_id = Cookies.get("userid");
        const response = await fetch(`/cart/get?profile_id=${profile_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const wish = await response.json();
        const wishlistItemData = await Promise.all(
          wish.food_items.map(async (item) => {
            const itemResponse = await fetch(
              `/menu/get/cart/${item.food_item}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const ItemData = await itemResponse.json();
            return ItemData;
          })
        );
        setWishlist(wishlistItemData);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);
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
      <img
        src="https://i.imgur.com/EZTQncg.png"
        alt="Dont Forget to Order!"
        className="wishlist-image"
      />
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
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <Card sx={{ minWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="food photo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description.length > 100
                        ? item.description.substring(0, 100) + "..."
                        : item.description}
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
              ))
            ) : (
              <Typography variant="h6" align="left" gutterBottom>
                No items in wishlist
              </Typography>
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Wishlist;
