import React from 'react'
import './About.css'
import i1 from '../../images/about.jpg'

export default function About() {
  return (
    <div className='about'>
        <div className="container">
          <h2>About Me</h2>
          <div className="content">
            <h3>Hello!</h3>
            <p>My name is Vahagn and I specialize in web development that utilizes HTML, CSS, JS, and REACT etc.</p>
            <p>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
            <p>When I'm not coding, I am writing blogs, reading, or picking up some new hands-on art project like photography.</p>
            <p>I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
          </div>
          <img src={i1} alt=''/>
        </div>
    </div>
  )
}
