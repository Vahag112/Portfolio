import React, { useState } from 'react'
import './Header.scss'
import { FaGithub} from 'react-icons/fa'
import { HiBars4 } from 'react-icons/hi2'
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  
  const [open,setOpen] = useState(false)

  return (
    <header>
      <div className="container">
        <a href="/" className='title'>Portfolio</a>
        <span className='bars' onClick={() => setOpen(!open)}><HiBars4 /></span>
        <nav className={open ? 'active' : ''}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://www.linkedin.com/in/vahagn-panosyan-388b373a9/"><FaLinkedin />Linkedin</a></li>
            <li><a href="https://github.com/Vahag112"><FaGithub /><span> Github</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
