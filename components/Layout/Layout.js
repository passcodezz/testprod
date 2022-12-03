import React from "react";
import Footer from "./Footer";
import Navtop from "./Navtop";
import Navbuttom from "./Navbuttom";

const Layout = ({ children }) => {
  return (
    <>
    
      <Navtop />
      {/* <Navbuttom /> */}
      {children}
      {/* <Translate /> */}
      <Footer />
    </>
  );
};

export default Layout;
