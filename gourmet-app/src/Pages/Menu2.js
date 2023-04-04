import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Paper, Button, TextField } from '@mui/material';
import Card from '../Components/Card';
import './menu.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00897b',
    },
    secondary: {
      main: '#f48fb1',
    },
    text: {
      secondary: '#757575',
    },
  },
});

function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [dishType, setDishType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = async () => {
    const API_ID = '0dc042fb';
    const API_KEY = 'bfda809d7920d6521bcda891e4194061';
    const response = await fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${searchQuery}&dishType=${dishType}&category=generic-meals&cuisineType=indian`);
    const data = await response.json();
    setSearchResults(data.hits.filter(hit => hit.recipe.image)); 
  };



  const handleDishType = (type) => {
    if (type === selectedCategory) {
      setSelectedCategory('');
      setDishType('');
    } else {
      setSelectedCategory(type);
      setDishType(type);
    }
    handleSearch();
  }

  return (
    <div id="main">
    <ThemeProvider theme={theme}>
      <div className="root">
        <Grid container spacing={3}>
          <Grid item xs={3} sm={4}>
            <Paper className="paper">
              <TextField 
                label="Search for a dish" 
                variant="outlined" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                fullWidth 
              />
              <Button variant="contained" color='primary' onClick={handleSearch} fullWidth>Search</Button>
              <Button variant="contained" color={selectedCategory === '' ? 'primary' : 'secondary'} onClick={() => handleDishType('')} fullWidth>All categories</Button>
              <Button variant="outlined" color={selectedCategory === 'starter' ? 'primary' : 'secondary'} onClick={() => handleDishType('starter')} fullWidth>Starters</Button>
              <Button variant="outlined" color={selectedCategory === 'soup' ? 'primary' : 'secondary'} onClick={() => handleDishType('soup')} fullWidth>Soup</Button>
              <Button variant="outlined" color={selectedCategory === 'main course' ? 'primary' : 'secondary'} onClick={() => handleDishType('main course')} fullWidth>Main Course</Button>
              <Button variant="outlined" color={selectedCategory === 'desserts' ? 'primary' : 'secondary'} onClick={() => handleDishType('desserts')} fullWidth>Dessert</Button>
              <Button variant="outlined" color={selectedCategory === 'drinks' ? 'primary' : 'secondary'} onClick={() => handleDishType('drinks')} fullWidth>Drinks</Button>
            </Paper>
          </Grid>
          <Grid item xs={4} sm ={8}>
            <div className="cardContainer">
              {searchResults.map((result) => (
                <Card key={result.recipe.uri} className="paper">
                  <img src={result.recipe.image} alt={result.recipe.label} />
                  <div className="card-body">
                    <div className="card-title">{result.recipe.label}</div>
                    <div className="card-text">{result.recipe.cuisineType.join(', ')}</div>
                    <div className="card-text">{result.recipe.source}</div>
                  </div>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
    </div>
  );
}

export default Menu;
