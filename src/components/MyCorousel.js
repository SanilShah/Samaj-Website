import { Card } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import Carousel from "react-material-ui-carousel";
import "../styles/style.css";
import ImageCard from "./ImageCard";

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
  <Carousel sx={{ marginLeft: 40, marginRight: 40 }}>
    {imageList.map((image, index) => (
      <>
        <ImageCard image={image} />
      </>
    ))}
  </Carousel>
);

export default MyCorousel;
