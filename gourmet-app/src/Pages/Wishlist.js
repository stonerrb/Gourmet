import { Container, Grid } from "@mui/material";
import FoodCard from "../Components/FoodCard";
const Wishlist = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <FoodCard
            item={{
              title: "Food",
              description: "Food Description",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Wishlist;
