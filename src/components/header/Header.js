import React, { useState } from 'react'
import './Header.css'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { AiOutlineDiscord } from 'react-icons/ai'
import { HiBars4 } from 'react-icons/hi2'

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
            <li><a href="/"><FaInstagram /><span>Instagram</span> </a></li>
            <li><a href="/"><AiOutlineDiscord /><span>Discord</span> </a></li>
            <li><a href="https://github.com/Vahag112"><FaGithub /><span> Github</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
