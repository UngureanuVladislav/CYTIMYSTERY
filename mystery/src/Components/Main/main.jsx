import React from 'react';
import './main.css'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import photo1 from '../../Assets/photo1.jpg'; 
import photo2 from '../../Assets/photo2.jpg'; 
import photo3 from '../../Assets/photo3.jpg'; 


export default function ImgMediaCard() {
  return (
    <div className="container"> {/* Use container class */}
      <div className="cardContainer">
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
              Diana
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It was an amazing experience for me,
              I had a lot of fun on this gloomy day thanks to you.
            </Typography>
          </CardContent>
          <CardActions className="cardActions">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="cardContainer">
        <Card className="card">
          <CardMedia
            className="cardMedia"
            component="img"
            alt="green iguana"
            height="140"
            image={photo2}
          />
          <CardContent className="cardContent">
            <Typography className="cardTitle" gutterBottom variant="h5" component="div">
              John
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Today, I explored a new city and discovered hidden gems.
              It was an adventure I'll never forget.
            </Typography>
          </CardContent>
          <CardActions className="cardActions">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="cardContainer">
        <Card className="card">
          <CardMedia
            className="cardMedia"
            component="img"
            alt="green iguana"
            height="140"
            image={photo3}
          />
          <CardContent className="cardContent">
            <Typography className="cardTitle" gutterBottom variant="h5" component="div">
              Emma
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Spent the day in nature, surrounded by trees and birdsong.
              It was so peaceful and rejuvenating.
            </Typography>
          </CardContent>
          <CardActions className="cardActions">
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
