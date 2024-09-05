import * as React from "react";
import AppealCard from "./AppealCard";
import Footer from "./Footer";
import MyCorousel from "./MyCorousel";
import NavBar from "./NavBar";

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
