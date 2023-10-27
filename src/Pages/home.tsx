import React, { useEffect } from "react";
import Navbar from "../Components/navbar";
import Header from "../Components/header";
import About from "../Components/about";
import Project from "../Components/project";
import Footer from "../Components/footer";
import Connect from "../Components/connect";

export default function Home() {
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Connect />
      <Footer />
    </>
  );
}
