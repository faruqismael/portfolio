import React from 'react';

// style
import './App.css'
// compoponents
import Header from './Header'
import Front from './Front'
import Footer from './Footer'

const app = () => {
    return (
        <div>
            <Header />
            <Front />
            <Footer />
        </div>
    );
}

export default app;