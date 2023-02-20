import React from 'react';

import '../Style/bar.css';
import '../Style/contact.css';

import insta from '../Image/insta.webp';
import git from '../Image/git.png';
import link from '../Image/link.png';


function ContactPage() {
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
                <form className="left">
                    <div className="name">Your name</div>
                    <input type="text" />
                    <div>Email</div>
                    <input type="email" />
                    <div>Message</div>
                    <textarea className="message"></textarea> <br />
                    <button>Send</button>
                </form>

                <div className="right">
                    <div className="contact">Contact</div>

                    {/* <a href="https://www.instagram.com/its_aditi.s__/" target="_blank"> </a> */}
                    <div className="social">
                        <img src={insta} alt="" />
                        Instagram
                    </div>


                    {/* <a href="https://github.com/aditi5427" target="_blank" ></a> */}
                    <div className="social">
                        <img src={git} alt="" />
                        Github
                    </div>


                    {/* <a href="https://www.linkedin.com/in/aditi-suman-7b4353247/" target="_blank" ></a> */}
                    <div className="social">
                        <img src={link} alt="" />Linkedin
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactPage;