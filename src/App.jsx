import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (
    // <>
      <div className="relative flex size-full_ min-h-screen flex-col bg-[#111a22] dark group/design-root _overflow-x-hidden font-['Space Grotesk','Noto Sans',sans-serif']">
        <Header />
        <div class="layout-container flex h-full grow flex-col overflow-x-hidden">
          <div class="px-80 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </div>
        </div>
        <Footer />
        </div>
      </div>
    // </>
  );
}


