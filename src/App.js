import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='porfolio'>
        <Portfolio />
      </section>
      <section id='blog'>
        <Blog />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
