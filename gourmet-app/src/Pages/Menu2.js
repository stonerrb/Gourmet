import { Container, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./CSS/menu2.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FoodCard from "../Components/FoodCard";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50000",
    },
    text: {
      secondary: "#757575",
    },
  },
});

function Menu2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dishType, setDishType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = async () => {
    const API_ID = "0dc042fb";
    const API_KEY = "bfda809d7920d6521bcda891e4194061";
    const response = await fetch(
      `https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${searchQuery}&dishType=${dishType}&category=generic-meals&cuisineType=indian`
    );
    const data = await response.json();
    setSearchResults(data.hits.filter((hit) => hit.recipe.image));
  };

  const handleDishType = async (dishType) => {
    if (dishType === selectedCategory) {
      setSelectedCategory("");
      setDishType("");
    } else {
      setSelectedCategory(dishType);
      setDishType(dishType);
    }
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="menu">
      <ThemeProvider theme={theme}>
        <Grid2 container spacing={1}>
          <Grid2 item xs={12} md={4} lg={4} xl={4}>
            <Container>
              <div className="menu2">
                <div className="menu2__search">
                  <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button onClick={handleSearch}>
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
                    selectedCategory === "main course" ? "primary" : "secondary"
                  }
                  className="button"
                  size="small"
                  onClick={() => handleDishType("main course")}
                >
                  Main Course
                </Button>
                <Button
                  variant="contained"
                  color={
                    selectedCategory === "desserts" ? "primary" : "secondary"
                  }
                  className="button"
                  size="small"
                  onClick={() => handleDishType("desserts")}
                >
                  Desserts
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

          <Grid2 item xs={12} md={8} lg={8} xl={8}>
            <Container>
              <Grid2 container spacing={3}>
                {searchResults.map((hit) => (
                  <Grid2 item xs={12} md={4} lg={4} xl={4}>
                    <FoodCard foodItems={hit.recipe} />
                  </Grid2>
                ))}
              </Grid2>
            </Container>
          </Grid2>
        </Grid2>
      </ThemeProvider>
    </div>
  );
}

export default Menu2;
