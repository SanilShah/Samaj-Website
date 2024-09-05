import * as React from "react";
import { Paper, Typography, Button, Card } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ImageCard from "./ImageCard";
import "../styles/style.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../images/corousel-images", false, /\.(jpg|jpeg|png)$/)
);

const imageList = Object.keys(images).map((key) => images[key]);

const MyCorousel = () => (
  <Carousel sx={{ margin: 2 }}>
    {imageList.map((image, index) => (
      <>
        <Card className="image-card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              width="200"
              image={image}
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
      </>
    ))}
  </Carousel>
);

export default MyCorousel;
