import React from "react";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;


