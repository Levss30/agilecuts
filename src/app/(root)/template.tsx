import React from "react";
// import Title from "./components/Title";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Template;
