// ImgMediaCard.jsx

import React from 'react';
import './main.css'; // Импортируем файл стилей
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import photo1 from '../../Assets/photo1.jpg'; // Импортируем изображение с расширением .jpg

export default function ImgMediaCard() {
  return (
    <div className="cardContainer"> {/* Добавляем класс cardContainer */}
      <Card className="card">
        <CardMedia
          className="cardMedia"
          component="img"
          alt="green iguana"
          height="140"
          image={photo1}
        />
        <CardContent className="cardContent">
          <Typography className="cardTitle" gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className="cardActions">
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
