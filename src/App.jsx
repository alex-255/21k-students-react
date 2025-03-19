import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionTeam from "./components/SectionTeam";
import SectionSales from "./components/SectionSales";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/Footer";

function App() {
  const [path, setPath] = useState("#home");

  const handlePath = (event) => {
    event.preventDefault();
    setPath(event.target.hash);
  };

  return (
    <>
      <Header handlePath={handlePath} />
      <main>
        {path === "#home" ? <Hero path={path} /> : ""}
        {path === "#section-team" ? <SectionTeam path={path} /> : ""}
        {path === "#section-sales" ? <SectionSales path={path} /> : ""}
        {path === "#section-subscribe" ? <SectionSubscribe path={path} /> : ""}
      </main>
      <Footer />
    </>
  );
}

export default App;
