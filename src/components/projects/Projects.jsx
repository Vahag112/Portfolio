import i1 from '../../images/tic-tac-toe.png'
import i2 from '../../images/beanscene.png'
import i3 from '../../images/hosty.png'
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import './Projects.scss'



export default function Projects() {
    const list = [
        { img: i1, title: 'Tic-Tac-Toe', text:'A modern, interactive twist on the classic Tic-Tac-Toe game, featuring a sleek neon-themed UI and fully responsive layout.' , linkVercel: 'https://tic-tac-toe-alpha-eight-52.vercel.app/', linkGithub: 'https://github.com/Vahag112/tic-tac-toe', span:[ '#react', '#css' ]},
        { img: i2, title: 'BeanScene Website', text:'An aesthetic, minimalist brand website designed for a coffee shop, featuring a premium UI, clean layouts, and smooth navigation.', linkVercel: 'https://bean-scene-beta.vercel.app/', linkGithub: 'https://github.com/Vahag112/BeanScene', span: ['#react', '#css'] },
        { img: i3, title: 'Hosty', text:'An aesthetic, minimalist brand website designed for a coffee shop, featuring a premium UI, clean layouts, and smooth navigation.', linkVercel: 'https://hosty-nine.vercel.app/', linkGithub: 'https://github.com/Vahag112/hosty', span: ['#react', '#css'] }

    ]

    return (
        <div className='projects'>
            <div className="container">
                {
                    list.map((elem, index) => (
                        <div className="item">
                            <div className="links">
                                <a href={elem.linkVercel}><button><BsGlobe /></button></a>
                                <a href={elem.linkGithub}><button><FaGithub/></button></a>
                            </div>
                            <img src={elem.img} alt="" />
                            <h2>{elem.title}</h2>
                            <p>{elem.text}</p>
                            <div className="tools">
                            {
                                elem.span.map((elem,index) => (
                                    <span>{elem}</span>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
