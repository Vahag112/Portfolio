import i1 from '../../images/tic-tac-toe.png'
import i2 from '../../images/beanscene.png'
import i3 from '../../images/hosty.png'
import i4 from '../../images/shop.png'
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import './Projects.scss'



export default function Projects() {
    const list = [
        { img: i1, title: 'Tic-Tac-Toe', text: 'A modern, interactive twist on the classic Tic-Tac-Toe game, featuring a sleek neon-themed UI and fully responsive layout.', linkVercel: 'https://tic-tac-toe-alpha-eight-52.vercel.app/', linkGithub: 'https://github.com/Vahag112/tic-tac-toe', span: ['#react', '#css'] },
        { img: i2, title: 'BeanScene Website', text: 'An aesthetic, minimalist brand website designed for a coffee shop, featuring a premium UI, clean layouts, and smooth navigation.', linkVercel: 'https://bean-scene-beta.vercel.app/', linkGithub: 'https://github.com/Vahag112/BeanScene', span: ['#react', '#scss'] },
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
                                    <a href={elem.linkVercel}><button><BsGlobe /></button></a>
                                    <a href={elem.linkGithub}><button><FaGithub /></button></a>
                                </div>
                                <img src={elem.img} alt="" />
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
