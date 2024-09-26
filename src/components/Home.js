import * as React from "react";
import AppealCard from "./AppealCard";
import Footer from "./Footer";
import MyCorousel from "./MyCorousel";
import NavBar from "./NavBar";
import Header from "./Header";
import DemiseForm from "./DemiseForm";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    console.log("Section:", section);
  };

  return (
    <>
      <Header />
      <NavBar onSectionChange={handleSectionChange} />
      <p>{activeSection}</p>
      {activeSection === "Home" ? (
        <>
          <MyCorousel />
          <AppealCard />
        </>
      ) : activeSection === "Demise Form" ? (
        <DemiseForm />
      ) : null}

      <Footer />
    </>
  );
}
