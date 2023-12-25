import './App.css';
import Header from './components/header/Header';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from './components/projects/Projects';
import Awards from './components/awards/awards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

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
     <Analytics />
    </div>
  );
}

export default App;
