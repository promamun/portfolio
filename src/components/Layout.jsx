import React from "react";
import NavBar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="preloader">
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
        <div className="preloader__dot" />
      </div>

      {children}

      <Footer />
    </>
  );
}
