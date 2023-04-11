import React from "react";
import '../Style/bar.css';
import '../Style/work.css';

import ss1 from '../Image/ss1.png';
import ss2 from '../Image/ss2.png';
import ss3 from '../Image/ss3.png';
import ss4 from '../Image/ss4.png';
import ss5 from '../Image/ss5.png';

function WorkPage() {
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

            <div className="titlePinkBackg"></div>
            <div className="titleGreenBackg"></div>
            <div className="main">
                <div className="text">My Projects
                    <div>In this, I have used html and css.</div>
                </div>
                <div className="container">
                    <img src={ss1} alt="" />
                    <div className="containerBtn"><a href="../youtube/index.html">View</a></div>

                    <img src={ss2} alt="" />
                    <div className="containerBtn"><a href="../chat/messanger.html">View</a></div>

                    <img src={ss3} alt="" />
                    <div className="containerBtn"><a href="../chat/messanger.html">View</a></div>

                    <img src={ss4} alt="" />
                    <div className="containerBtn"><a href="../chat/messanger.html">View</a></div>

                    <img src={ss5} alt="" />
                    <div className="containerBtn"><a href="../chat/messanger.html">View</a></div>

                </div>
            </div>
        </>


    );
}

export default WorkPage;