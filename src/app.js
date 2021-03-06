import React from 'react';

// style
import './styles/App.css'
// compoponents
import Header from './components/Header'
import Front from './components/Front'
import About from './components/About'
import Pojects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


const app = () => {
    return (
        <div>
            {/* <Header /> */}
            <Front />
            <About />
            <Pojects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default app;