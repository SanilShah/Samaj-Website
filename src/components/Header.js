import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Logo from "../images/vanik-panch-logo.jpg";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        height: 100,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" style={{ height: 100 }} />
        </Box>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Call Now: +91 1234567890
        </Typography>
        <Button
          color="primary"
          variant="contained"
          sx={{ color: "#fff" }}
          size="large"
          disableElevation
        >
          Donate Now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
