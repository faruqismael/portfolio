import React, { Component } from 'react';

class About extends Component {
    state = {
        image: "https://avatars.githubusercontent.com/u/60698026?s=460&u=cb12546a231d3bc0a245c9e3c43c7b2f6934bd7a&v=4",
        skills: ['html', 'css', 'python', 'javascript', 'vue', 'bootstrap', 'tailwind']
    }
    render() {
        return (
            <div className="about page">
                <div className="box">
                    <div className="image">
                        <img className="profile" src={this.state.image} alt="" />
                    </div>
                    <div className="info">
                        <div className="name">
                            Faruq Ismael
                    </div>
                        <div className="role">
                            Front-End Developer <span>@HighTech</span>
                        </div>
                    </div>
                </div>
                <div className="extra box">
                    <div className="bio">
                        <h2>Me Simply</h2>
                        <p>
                            so i am <span className="name">Faruq Ismael</span>, computer science and front-end web developer. <br />
                            i love all about programming and designing specially when it comes to the web. <br />
                        </p>
                    </div>
                </div>
                <div className="box white">
                    <h2>skills</h2>
                    <div className="grid text-center border">
                        {this.state.skills.map(skill => <p className="skill">{skill}</p>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;