import React from 'react'
import './Footer.css'
import { BsSend } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <h2>Contact</h2>
                <p>I’m currently available for freelance work</p>

                <div className="content">
                    <button className="btn1">Send Me A Message</button>
                    <div className="box">
                        <label >
                            your name *
                            <input type="text" placeholder='Enter your name'/>
                        </label>
                        <label >
                            Your email *
                            <input type="text" placeholder='Enter your email'/>
                        </label>
                        <label >
                            your message *
                            <input type="text" placeholder='Enter your needs'/>
                        </label>

                    </div>
                    <button className="btn2">Send Message<BsSend /></button>
                </div>

            </div>
        </footer>
    )
}
