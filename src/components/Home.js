import * as React from "react";
import AppealCard from "./AppealCard";
import Footer from "./Footer";
import MyCorousel from "./MyCorousel";
import NavBar from "./NavBar";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <MyCorousel />
      <AppealCard />
      <Footer />
    </>
  );
}
