import React from 'react';
import '../styles/About.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <div className="about">
            <div className="about__image">
                <img src="https://avatars.githubusercontent.com/u/60698026?s=460&u=cb12546a231d3bc0a245c9e3c43c7b2f6934bd7a&v=4" alt="FARUQ ISMAEL" />
            </div>
            <div className="about__about">
                <div className="about__top">
                    <h2>
                        Hello there 👋! I'm Faruq Ismael,
                        student and front-end
                        web developer From <br />
                        <FontAwesomeIcon className="about__locator" color={"blue"} icon={faMapMarkerAlt} /> Addis Ababa
                    </h2>

                </div>
                <div className="about__bio">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi, laborum minima voluptates sed assumenda est excepturi, porro perferendis iusto minus labore voluptatibus, alias doloremque. Consectetur labore amet exercitationem ipsum.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi, laborum minima voluptates sed assumenda est excepturi, porro perferendis iusto minus labore voluptatibus, alias doloremque. Consectetur labore amet exercitationem ipsum.
                    </div>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora molestias consequuntur ducimus nemo illum similique voluptatibus quis, voluptate, maxime dicta iste numquam quaerat non eum? Consectetur voluptas voluptatum ducimus deserunt?
                    </div>

                    <div className="about__connect">
                        <a href="https://www.facebook.com/profile.php?id=100014434574469">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com/FaruqIsmael5">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://github.com/faruqismael">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a title="telegram" href="https://t.me/faruqismael">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
