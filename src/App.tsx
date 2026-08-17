import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyCustom from './components/WhyCustom';
import Process from './components/Process';
import Services from './components/Services';
import Projects from './components/Projects';
import Industries from './components/Industries';
import StackMarquee from './components/StackMarquee';
import Engagement from './components/Engagement';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="bg-grid" />
      <Header />
      <Hero />
      <Problem />
      <WhyCustom />
      <Process />
      <Services />
      <Projects />
      <Industries />
      <StackMarquee />
      <Engagement />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
