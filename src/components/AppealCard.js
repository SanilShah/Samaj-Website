import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/style.css";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const AppealCard = () => {
  return (
    <Box className="appeal-card">
      <Typography variant="h5" component="h1" gutterBottom>
        Appeal
      </Typography>
      <Typography variant="body1" component="p">
        Today is the world of digitization. It’s very important that we keep
        pace with the world and keep moving hand in hand. In line with the same
        intention, Samaj has started the process of digitization. We require
        your support to complete 100% digitization and for that you are
        requested to submit your Family Updated Data by following any of the 2
        options mentioned below: 1. Fill the physical form & submit at the Samaj
        office OR OR 2. Click Update button below Vastipatrak and update your
        family Data. In our quarterly magazine “UTTHAAN”, if you want to publish
        any of your articles, poems, views, or information, then send it to us
        at snvsamaj@gmail.com and / or snvutthaan@gmail.com Your small donation
        is very important for any Samaj to grow and reach the masses. You can
        donate just at the click of a button and contribute to the wellbeing of
        Samaj. Samaj has provided Online Donation Options both on the website
        and also Mobile App.
      </Typography>
    </Box>
  );
};

export default AppealCard;
