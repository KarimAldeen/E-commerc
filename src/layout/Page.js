import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import Header from "../components/Utils/Header";
import MidBar from "../components/Utils/MidBar";


const Page = ({ children }) => {
  return (
    <>
      <Header/>
      <MidBar/>
      {children}
      <Footer />
    </>
  );
};

export default Page;
