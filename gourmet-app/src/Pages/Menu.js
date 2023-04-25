import { Container, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./CSS/menu2.css";
import { ThemeProvider } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../Components/Navbar";
import MenuFoodCard from "../Components/MenuFoodCard";
import FooterComp from "../Components/FooterComp";
import { theme } from "../Components/Theme";

/*eslint-disable*/
function Menu() {
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [dishType, setDishType] = useState();

  useEffect(() => {
    fetch("/menu/get")
      .then((res) => res.json())
      .then((data) => {
        const dish = data.food_item;
        setDishes(dish);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDishType = async (dishType) => {
    if (dishType === selectedCategory) {
      setSelectedCategory("");
      setDishType("");
    } else {
      setSelectedCategory(dishType);
      setDishType(dishType);
    }
  };

  
  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.cuisine === selectedCategory)
    : dishes;

  return (
    <>
      <Navbar></Navbar>
      <div className="menu">
        <ThemeProvider theme={theme}>
          <Grid2 container spacing={1}>
            <Grid2 xs={1} md={4} lg={2} xl={3}>
              <Container>
                <div className="menu2">
                  <div className="menu2__search">
                    <TextField
                      id="outlined-basic"
                      label="Search"
                      variant="outlined"
                      color="secondary"
                      size="small"
                    />
                    <Button>
                      <SearchIcon />
                    </Button>
                  </div>
                  <Button
                    variant="contained"
                    color={
                      selectedCategory === "starters" ? "primary" : "secondary"
                    }
                    className="button"
                    size="small"
                    onClick={() => handleDishType("starters")}
                  >
                    Breakfast
                  </Button>
                  <Button
                    variant="contained"
                    color={
                      selectedCategory === "MainCourse"
                        ? "primary"
                        : "secondary"
                    }
                    className="button"
                    size="small"
                    onClick={() => handleDishType("MainCourse")}
                  >
                    Main Course
                  </Button>
                  <Button
                    variant="contained"
                    color={
                      selectedCategory === "desert" ? "primary" : "secondary"
                    }
                    className="button"
                    size="small"
                    onClick={() => handleDishType("desert")}
                  >
                    Deserts
                  </Button>
                  <Button
                    variant="contained"
                    color={
                      selectedCategory === "drinks" ? "primary" : "secondary"
                    }
                    className="button"
                    size="small"
                    onClick={() => handleDishType("drinks")}
                  >
                    Drinks
                  </Button>
                </div>
              </Container>
            </Grid2>

            <Grid2 xs={12} md={8} lg={8} xl={8}>
              <Container>
                <Grid2 container columnSpacing={6} rowSpacing={3}>
                  {filteredDishes.map((items) => (
                    <Grid2 xs={12} md={6} lg={6} xl={6}>
                      <MenuFoodCard foodItems={items} />
                    </Grid2>
                  ))}
                </Grid2>
              </Container>
            </Grid2>
          </Grid2>
        </ThemeProvider>
      </div>
      <FooterComp margin="800px" />
    </>
  );
}

export default Menu;
