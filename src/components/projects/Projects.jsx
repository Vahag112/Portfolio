import i1 from '../../images/tic-tac-toe.png'
import i2 from '../../images/beanscene.png'
import i3 from '../../images/hosty.png'
import i4 from '../../images/shop.png'
import i5 from '../../images/todolist.png'
import i6 from '../../images/furnitureShop.png'
import i7 from '../../images/apple_clone.png'
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import './Projects.scss'



export default function Projects() {
    const list = [
        { img: i6, title: 'Furniture Shop', text: 'E-commerce application featuring JWT authentication and authorization, product management, shopping cart, user profiles, and admin panel.', linkGithub: 'https://github.com/Vahag112/furniture-shop', span: ['#next', '#scss', '#nestjs', '#postgresql', '#prisma']},
        { img: i1, title: 'Tic-Tac-Toe', text: 'A modern, interactive twist on the classic Tic-Tac-Toe game, featuring a sleek neon-themed UI and fully responsive layout.', linkVercel: 'https://tic-tac-toe-alpha-eight-52.vercel.app/', linkGithub: 'https://github.com/Vahag112/tic-tac-toe', span: ['#react', '#css'] },
        {img: i7, title: 'Apple Website Clone', text: "A modern clone of the official Apple website built using React, TypeScript, and SCSS. Replicates Apple's signature clean UI, responsive layout, and slick product displays.", linkVercel: 'https://i-store-showcase.vercel.app/', linkGithub: 'https://github.com/Vahag112/apple-clone', span: ['#react','#typescript', '#scss' ]},
        { img: i5 , title: 'TodoList' , text:'"A full-stack To-Do application built to manage daily tasks efficiently. It features user authentication, task filtering, and a powerful MERN backend for real-time data persistence."', linkGithub: 'https://github.com/Vahag112/To-Do-List',span: ['#react', '#css', '#express', '#mongodb' , '#mongoose'] },
        { img: i3, title: 'Hosty', text: 'A sleek, fully responsive web application tailored for the hospitality and hotel industry.', linkVercel: 'https://hosty-nine.vercel.app/', linkGithub: 'https://github.com/Vahag112/hosty', span: ['#react', '#css'] },
        { img: i4, title: 'Online Shop', text: 'A stylish and fully responsive online storefront crafted for clothing brands.   ', linkVercel: 'https://clothmart-gilt.vercel.app/', linkGithub: 'https://github.com/Vahag112/clothmart', span: ['#javascript', '#css'] }

    ]

    return (
        <div className='projects'>
            <div className="container">
                <h2>Projects</h2>
                 <p className='text'>I had the pleasure of working with these awesome projects</p>
                <div className="content">

                    {
                        list.map((elem, index) => (
                            <div className="item" key={index}>
                                <div className="links">
                                  {elem.linkVercel && <a href={elem.linkVercel} target="_blank" rel="noreferrer"><button><BsGlobe /></button></a>}  
                                    <a href={elem.linkGithub} target="_blank" rel="noreferrer"><button><FaGithub /></button></a>
                                </div>
                                <img src={elem.img} alt="" loading='lazy'/>
                                <h3>{elem.title}</h3>
                                <p>{elem.text}</p>
                                <div className="tools">
                                    {
                                        elem.span.map((elem, index) => (
                                            <span key={index}>{elem}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
