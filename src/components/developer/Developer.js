import React from 'react'
import './Developer.css'
import i1 from '../../images/dev1.png'
import { FaRegEnvelope } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { FiBriefcase, FiDownload } from 'react-icons/fi'

export default function Developer() {
  const skills = ["HTML", "CSS" , "JS", "REACT" , 'NODE', 'EXPRESS', 'MONGODB']

  return (
    <div className='developer'>
      <div className="container">
        <h2>Developer</h2>
        <div className="content">
          <div className="item">
            <div className="box">
              <img src={i1} alt=''/>
              <h3>Vahagn <span>Full-stack developer</span></h3>
            </div>
            <div className="detal">
              <p><FaRegEnvelope />panosyanvahagn80@gmail.com</p>
              <p><SlLocationPin />Armenia</p>
              <p><FiBriefcase />Full-time / Freelancer</p>
              <div className="skills">
                {
                  skills.map((elem,index) => (
                    <span key={index}>{elem}</span>
                  ))
                }
              </div>
            </div>
            <button>Download CV<FiDownload /></button>
          </div>
          <div className="item2">
            <div className="box">
              <h3>Hey <br /> I'm Vahagn,<br /> Full-stack Developer</h3>
              <p>I help business grow by crafting amazing web experiences. If you’re <br /> looking for a developer that likes to get stuff done,</p>
              <a href="/">let’s talk <div className="circle"><FaRegEnvelope /></div></a>
            </div>

            <div className="detal">
              <p><span>2</span>Programming <br /> Language</p>
              <p><span>7</span>Development <br /> Tools</p>
              <p><span>1</span>Years of <br /> Experience</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
