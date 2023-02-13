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
                    <div><a href="./index.html">Home</a></div>
                    <div><a href="./aboutPage.html">About</a></div>
                    <div><a href="./work.html">Work</a></div>
                    <div><a href="./contact.html">Contact</a></div>
                </div>
            </div>


            <div className="main">
                {/* <div class="name">
                    <div>This is
                        <span style="--i:1">A</span>
                        <span style="--i:2">d</span>
                        <span style="--i:3">i</span>
                        <span style="--i:4">t</span>
                        <span style="--i:5">i</span>
                        <span style="--i:6">S</span>
                        <span style="--i:7">u</span>
                        <span style="--i:8">m</span>
                        <span style="--i:9">a</span>
                        <span style="--i:10">n</span>
                    </div>
                </div> */}
                <div className="work">
                    <span>I am</span>
                    <div className="message">Web Developer</div>
                </div>
            </div>
        </>
    )
}

export default HomePage;


