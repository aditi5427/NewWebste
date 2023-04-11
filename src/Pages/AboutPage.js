import React from 'react';
import '../Style/bar.css';
import '../Style/about.css';

import Guriya from '../Image/Guriya.jpg';
import mandala from '../Image/mandala.jpg';
import pooh from '../Image/pooh.jpg';
import anime from '../Image/anime.jpg';

function AboutPage() {

    return (
        <>
            <div className="nav">
                <div className="navFirstChild">
                    <div>Aditi Suman</div>
                </div>
                <div className="navChild">
                    <div><a href="/">HomePage</a></div>
                    <div><a href="/about">AboutPages</a></div>
                    <div><a href="/works">Work</a></div>
                    <div><a href="/contact">Contact</a></div>
                </div>
            </div>

            <div className="about">About me</div>
            <div className="main">
                <img src={Guriya} alt="" />
                <div className="aboutMe">
                    <div>I am Aditi Suman.</div>
                    <div>I am a web developer.</div>
                    <div>I love designing and painting.</div>
                    <div>I have also learned some programming languages like java, c++ and c programming</div>
                </div>
            </div>
            <hr />

            <div className="fav">
                <div>My favourite artworks</div>
                <div className="drawing">
                    <img src={mandala} alt="" />
                    <img src={pooh} alt="" />
                    <img src={anime} alt="" />
                </div>
            </div>
        </>
    );
}
export default AboutPage;