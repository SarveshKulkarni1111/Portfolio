import './App.css';
import Header from './components/header/Header';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from './components/projects/Projects';
import Awards from './awards/awards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Projects />
     <Awards />
     <Contact />
     <Footer />
     <SpeedInsights />
    </div>
  );
}

export default App;
