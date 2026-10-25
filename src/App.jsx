import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
