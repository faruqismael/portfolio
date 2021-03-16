import React from 'react';
import "../styles/Contact.css"
const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="contact__row">
                <div className="contact__form">
                    <h3>Send me a feedback</h3>
                    <form action="">
                        <input type="email" className="contact__email form" placeholder="email address" /> <br />
                        <textarea placeholder="your feedback here" className="contact__feedback form" /> <br />
                        <input type="submit" className="contact__submit" value="Submit" />
                    </form>
                </div>
                <div className="contact__map">
                    <h2>location </h2>
                </div>
            </div>
        </div>
    );
}

export default Contact;
