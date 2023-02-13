import React from 'react';
import '../Style/bar.css';
import '../Style/contact.css';

import insta from '../Image/insta.webp';
import git from '../Image/git.png';
import link from '../Image/link.png';


function ContactPage() {
    return (
        <>
            <div classname="nav">
                <div className="navFirstChild">
                    <div>Aditi Suman</div>
                </div>
                <div classname="navChild">
                    <div><a href="./index.html">Home</a></div>
                    <div><a href="./aboutPage.html">About</a></div>
                    <div><a href="./work.html">Work</a></div>
                    <div><a href="./contact.html">Contact</a></div>
                </div>
            </div>


            <div classname="main">
                <form classname="left">
                    <div classname="name">Your name</div>
                    <input type="text" />
                    <div>Email</div>
                    <input type="email" />
                    <div>Message</div>
                    <textarea classname="message"></textarea> <br />
                    <button>Send</button>
                </form>

                <div className="right">
                    <div classname="contact">Contact</div>

                    {/* <a href="https://www.instagram.com/its_aditi.s__/" target="_blank"> </a> */}
                    <div classname="social">
                        <img src={insta} alt="" />
                        Instagram
                    </div>


                    {/* <a href="https://github.com/aditi5427" target="_blank" ></a> */}
                    <div classname="social">
                        <img src={git} alt="" />
                        Github
                    </div>


                    {/* <a href="https://www.linkedin.com/in/aditi-suman-7b4353247/" target="_blank" ></a> */}
                    <div classname="social">
                        <img src={link} alt="" />Linkedin
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactPage;