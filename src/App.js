import './App.css';
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Developer />
        <About />
        <Skills />
        <Works />
      </main>
      <Footer />
    </div>
  );
}

export default App;
