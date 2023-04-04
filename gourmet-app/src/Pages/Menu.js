import { TextField } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { Button } from '@mui/material'; 
import './menu.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50000',
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
        const response = await fetch(`https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${searchQuery}&category=generic-meals&cuisineType=indian`);
        const data = await response.json();
        setSearchResults(data.hits.filter(hit => hit.recipe.image)); 
      };

    const handleDishType = async (dishType) => {
        if (dishType === selectedCategory) {
            setSelectedCategory('');
            setDishType('');
        } else {
            setSelectedCategory(dishType);
            setDishType(dishType);
        }
        handleSearch();
    };

    useEffect(() => {
      handleSearch();
    }, []);

    return (
        <div className="menu-container">
        <div className="category-container">
            <div className="category">
              <ThemeProvider theme={theme}>
                <TextField variant='outlined' className="button" label='Search for a dish' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} fullWidth />
                <Button variant='contained' color={selectedCategory === '' ? 'primary' : 'secondary'} className="button" onClick={handleSearch} fullWidth>Search</Button>
                <Button variant='contained' color={selectedCategory === 'starters' ? 'primary' : 'secondary'} className="button" onClick={() => handleDishType('starters')} fullWidth>Breakfast</Button>
                <Button variant='contained' color={selectedCategory === 'main course' ? 'primary' : 'secondary'} className="button" onClick={() => handleDishType('main course')} fullWidth>Main Course</Button>
                <Button variant='contained' color={selectedCategory === 'desserts' ? 'primary' : 'secondary'} className="button" onClick={() => handleDishType('desserts')} fullWidth>Desserts</Button>
                <Button variant='contained' color={selectedCategory === 'drinks' ? 'primary' : 'secondary'} className="button" onClick={() => handleDishType('drinks')} fullWidth>Drinks</Button>
              </ThemeProvider>
        </div>
        </div>
        <div className='card-container'>
            {searchResults.map((result) => (
                <div className="card">
                <img src={result.recipe.image} alt={result.recipe.label} />
                <div className="card-body">
                  <div className="card-title">{result.recipe.label}</div>
                  <div className="card-text">{result.recipe.cuisineType}</div>
                </div>
              </div>
            ))}
        </div>

        </div>

    )
    }

export default Menu;