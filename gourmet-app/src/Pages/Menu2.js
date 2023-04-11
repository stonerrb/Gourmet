import { TextField } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { Button } from '@mui/material'; 
import './CSS/menu2.css';
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

function Menu2() {
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
    )
    }

export default Menu;