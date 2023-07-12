import React, {Component} from 'react';
import Navbar from './global-components/navbar';
import Footer from './global-components/footer-v3';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}