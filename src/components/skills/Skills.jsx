import React from 'react'
import './Skills.scss'
import { RiComputerLine } from 'react-icons/ri'
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3Alt} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";






export default function Skills() {
  const list = [
    {icon: <ImHtmlFive2 /> , color: '#E34F26', text: 'HTML5' },
    {icon: <FaCss3Alt /> , color: '#1572B6', text: 'CSS3' },
    {icon: <FaSass /> , color: '#CF649A' , text:'Sass/SCSS'},
    {icon: <IoLogoJavascript /> , color: '#E7A020', text: 'JavaScript' },
    {icon: <SiTypescript/> , color: '#3178C6', text:'TypeScript'},
    {icon: <FaReact /> , color: '#61DAFB', text: 'React JS' }, 
    {icon: <FaNodeJs /> , color:'#339933', text:'Node JS'},
    {icon: <SiExpress /> , color: 'black', text:'Express JS' },
    {icon : <SiMongodb/> , color:'#00ED64' , text: 'MongoDB'},
    {icon: <SiMongoose /> , color: '#880000', text: 'Mongoose'},
    {icon: <SiRedux /> , color: '#7450B3', text: 'Redux-Toolkit'},
    {icon: <FaGitAlt /> , color: '#F24E28', text: 'Git'}
    

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
            <span>HTML·CSS·SCSS·JS·TS <br />REACT·REDUX-TOOLKIT·NODE<br />EXPRESS·MONGODB·MONGOOSE</span>
          </div>

          <div className="box2">
                {
                  list.map((elem,index) => (
                    <div className="item" key={index}>
                        <div className="circle" style={{background: elem.color}}>{elem.icon}</div>
                        <span>{elem.text}</span>
                    </div>
                  ))
                }
          </div>
        </div>
      </div>
    </div>
  )
}
