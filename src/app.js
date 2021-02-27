import React, { Component } from 'react'
import SideBar from './components/sidebar'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import Anime, { anime } from 'react-anime'

class App extends Component {
    state = {
        about: true,
        projects: false,
        contact: false
    };

    aboutPage = () => {
        let about = true;
        let contact = false;
        let projects = false;
        this.setState({ contact, projects, about })
    }

    projectsPage = () => {
        let about = false;
        let contact = false;
        let projects = true;
        this.setState({ contact, projects, about })
    }

    contactPage = () => {
        let about = false;
        let contact = true;
        let projects = false;
        this.setState({ contact, projects, about })
    }


    render() {
        return (
            <div className="app">
                <div>
                    {/* <SideBar about={this.state.about} /> */}
                    <div className="sidebar">
                        <a href onClick={this.aboutPage} className="menu">About</a>
                        <a href onClick={this.projectsPage} className="menu">Projects</a>
                        <a href onClick={this.contactPage} className="menu">Contact</a>
                    </div>
                </div>
                <Anime delay={anime.stagger(100)} scale={[.1, .9]}>
                    <div className="body">
                        {this.state.about === true ? <About /> : this.state.contact === true ? <Contact /> : <Projects />}
                        {/* <Contact /> */}
                    </div>
                </Anime>
                {/* hello world */}
            </div>
        )
    }
}

export default App;
