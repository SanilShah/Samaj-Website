import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import "../styles/style.css";

export default function ImageCard(props) {
  return (
    <Card className="image-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          width="600"
          image={props.image}
          alt="green iguana"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  );
}
