import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionTeam from "./components/SectionTeam";
import SectionSales from "./components/SectionSales";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  const [path, setPath] = useState("#home");

  const handlePath = (event) => {
    event.preventDefault();
    setPath(event.target.hash);
  };

  useEffect(() => {
    var menuBar = document.querySelector(".menu-bar");
    // for mobile menu
    var menuHamburger = document.querySelector(".menu-bar-hamburger");
    menuHamburger.onclick = function () {
      menuHamburger.classList.toggle("menu-opened");
      menuBar.classList.toggle("menu-opened");
    };

    // for mobile menu closing while click on menu link
    var menuLink = document.getElementsByClassName("menu-area-link");
    var menuLinkLength = menuLink.length;

    for (let step = 0; step < menuLinkLength; step++) {
      menuLink[step].onclick = function () {
        menuHamburger.classList.remove("menu-opened");
        menuBar.classList.remove("menu-opened");
      };
    }
  }, [path]);

  return (
    <>
      <Header handlePath={handlePath} path={path} />
      <main>
        {path === "#home" ? <Hero path={path} /> : ""}
        {path === "#section-team" ? <SectionTeam path={path} /> : ""}
        {path === "#section-sales" ? <SectionSales path={path} /> : ""}
        {path === "#section-subscribe" ? <SectionSubscribe path={path} /> : ""}
        <Menu className="menu-bottom" path={path} handlePath={handlePath} />
      </main>
      <Footer />
    </>
  );
}

export default App;
