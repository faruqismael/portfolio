import React, { Component } from 'react';
import Anime, { anime } from 'react-anime'

class Contact extends Component {
    state = {
        contact: [
            'facebook',
            "telegram", "github"
        ]
    }
    render() {
        return (
            <div className="contact page">
                <h2>Contact Me</h2>
                <a href className="contact-list">
                    {this.state.contact.map(c =>
                        <Anime delay={anime.stagger(100)} scale={[.9]}>
                            <div className="contact-card box">
                                {c}
                            </div>
                        </Anime>
                    )}
                </a>
            </div>
        );
    }
}

export default Contact;