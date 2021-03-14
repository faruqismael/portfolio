import React from 'react';

// style
import './App.css'
// compoponents
import Header from './Header'
import Front from './Front'
import About from './About'
import Footer from './Footer'

const app = () => {
    return (
        <div>
            <Header />
            <Front />
            <About />
            <Footer />
        </div>
    );
}

export default app;