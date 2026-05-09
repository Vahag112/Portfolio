import React from 'react'
import './Works.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import i1 from '../../images/comp.png'

export default function Works() {
  return (
    <div className='works'>
        <div className="image"></div>

        <div className="container">
            <h2>Works</h2>
            <p>I had the pleasure of working with these awesome projects</p>
            <div className="box">
                <button><IoIosArrowDropleftCircle /></button>
                    <img src={i1} alt=''/>
                <button><IoIosArrowDroprightCircle /></button>
            </div>
        </div>
    </div>
  )
}
