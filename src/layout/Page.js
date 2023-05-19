import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";


const Page = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
