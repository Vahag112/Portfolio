import React from 'react'
import './Skills.css'
import { RiComputerLine } from 'react-icons/ri'
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt, FaNode } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


export default function Skills() {
  const list = [
    {icon: <ImHtmlFive2 /> , color: '#E54F26', text: 'HTML' },
    {icon: <FaCss3Alt /> , color: '#0C73B8', text: 'CSS' },
    {icon: <FaNodeJs /> , color: '#E7A020', text: 'JS' },
    {icon: <FaReact /> , color: '#28A9E0', text: 'REACT' }, 
    {icon: <FaNode /> , color:'#7CB700', text:'NODE'},

  ]

  return (
    <div className='skill'>
      <div className="background"></div>

      <div className="container">
        <h2>Skills</h2>
        <p>I am striving to never stop learning and improving</p>
        <div className="content">
          <div className="box">
            <RiComputerLine />
            <p>Web developement</p>
            <span>HTML·CSS·JS·REACT <br />NODE·EXPRESS·MONGODB</span>
          </div>

          <div className="box2">
                {
                  list.map((elem,index) => (
                    <div className="item" key={index}>
                        <div className="circle" style={{background: elem.color}}>{elem.icon}</div>
                        <p style={{color: elem.color}}>{elem.text}</p>
                    </div>
                  ))
                }
          </div>
        </div>
      </div>
    </div>
  )
}
