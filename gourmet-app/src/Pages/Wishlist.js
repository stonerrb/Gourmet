import { Container, Grid } from "@mui/material";
import FoodCard from "../Components/FoodCard";
const Wishlist = () => {
<<<<<<< HEAD
  return (
    <Container lg={1}>
      <Grid container spacing={2} sx={{ m: "90px" }}>
        <Grid item xl={3} lg={3}>
          <FoodCard
            foodItems={{
              title: "Chicken Burger",
              description: "Chicken Burger with cheese and lettuce",
              image:
                "https://images.unsplash.com/photo-1616486490928-8e1b0e1b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Wishlist;
=======
    return (
        <div>
            <h1>Wishlist</h1>
            <FoodCard>
                <div className='card-image'>
                    <img className='cardimg' src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"></img>
                    </div>
            </FoodCard>
        </div>
    );
}
>>>>>>> 1215ac6aaabda61519d0b045778ed0510ea829a8
