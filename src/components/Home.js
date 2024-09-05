import * as React from "react";
import Button from "@mui/material/Button";
import NavBar from "./NavBar";
import MyCorousel from "./MyCorousel";
import AppealCard from "./AppealCard";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <MyCorousel />
      <AppealCard />
      <Footer />
    </>
  );
}
