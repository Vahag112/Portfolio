import './App.css'
import About from './components/about/About'
import Developer from './components/developer/Developer'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
    <Header/>
      <main>
        <Developer />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
