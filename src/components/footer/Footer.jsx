import React from 'react'
import './Footer.scss'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa"
import { BsEnvelope } from "react-icons/bs";


export default function Footer() {


    return (
        <footer>
            <div className="container">
                <h2>Contact</h2>
                <p>Feel free to reach out — I’m open to new opportunities,<br />collaborations and interesting projects.</p>

                <div className="content">
                    <div className="item">
                        <div className="icon">
                            <BsEnvelope />
                        </div>
                        <span>Email</span>
                        <p>panosyanvahagn80@gmail.com</p>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <FaGithub />
                        </div>
                        <span>GitHub</span>
                        <p>https://github.com/Vahag112</p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/vahagn-panosyan-388b373a9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item"
                    >
                        <div className="icon">
                            <FaLinkedin />
                        </div>

                        <span>LinkedIn</span>
                        <p>View My Profile</p>
                    </a>
                </div>

            </div>
        </footer>
    )
}
