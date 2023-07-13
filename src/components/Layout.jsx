import React from "react";
import NavBar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />

            {children}

            <Footer />
        </>
    );
}