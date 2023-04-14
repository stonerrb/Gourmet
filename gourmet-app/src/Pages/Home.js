import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Home.css';

const cardinfo = [
  {
    title: 'Pizza',
    description: 'Freshly baked pizza with a variety of toppings',
  },
  {
    title: 'Pizza',
    description: 'Freshly baked pizza with a variety of toppings',
  },
  {
    title: 'Pizza',
    description: 'Freshly baked pizza with a variety of toppings',
  },
  {
    title: 'Pizza',
    description: 'Freshly baked pizza with a variety of toppings',
  },
  {
    title: 'Pizza',
    description: 'Freshly baked pizza with a variety of toppings',
  },
  {
    title: 'Pizza',
    description: 'Freshly baked pizza with a variety of toppings',
  }
]

const RenderCards = () => {
  return cardinfo.map((card, index) => {
    return (
      <Card sx={{ maxWidth: 345, mt:'8rem', ml:'3rem' }} key={index}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 200 }}
            image="https://static.toiimg.com/photo/msid-87930581/87930581.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    )
  })
}


export default function MediaCard() {
  return (
    <div className="headmenu">
    <div className="container">
      <RenderCards/>
      </div>
    </div>
  );
}
