import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  let { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
