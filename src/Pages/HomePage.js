import React from 'react';
import '../Style/bar.css';
import '../Style/style.css'

function HomePage() {
    return (
        <>
            <div className="nav">
                <div className="navFirstChild">
                    <div>Aditi Suman</div>
                </div>
                <div className="navChild">
                    <div><a href="/">Home</a></div>
                    <div><a href="/about">About</a></div>
                    <div><a href="/works">Work</a></div>
                    <div><a href="/contact">Contact</a></div>
                </div>
            </div>


            <div className="main">
                <div class="name">
                    <div>This is
                        <span>A</span>
                        <span>d</span>
                        <span>i</span>
                        <span>t</span>
                        <span>i</span>
                        <span>S</span>
                        <span>u</span>
                        <span>m</span>
                        <span>a</span>
                        <span>n</span>
                    </div>
                </div>
                <div className="work">
                    <span>I am</span>
                    <div className="message">Web Developer</div>
                </div>
            </div>
        </>
    )
}

export default HomePage;


