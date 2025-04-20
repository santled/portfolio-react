import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px", scrollBehavior: "smooth" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;

