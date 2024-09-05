import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "#232323",
        marginTop: "auto",
      }}
    >
      {/* Links Section */}
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          marginBottom: "8px",
          color: "#cfcccc",
        }}
      >
        <Link href="#" color="inherit" underline="hover">
          Home
        </Link>
        <Link href="#" color="inherit" underline="hover">
          About Us
        </Link>
        <Link href="#" color="inherit" underline="hover">
          News
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Notice
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Forms
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Gallery
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Contact Us
        </Link>
      </Box>

      {/* Copyright Section */}
      <Typography variant="body2" color="primary">
        Copyright © {new Date().getFullYear()} SNV SAMAJ. All rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
