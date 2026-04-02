import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Projects } from './components/Projects';
import { DevelopmentTools } from './components/DevelopmentTools';
import { Studies } from './components/Studies';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { SectionReveal } from './components/SectionReveal';

function App() {

  return (
    <>
      <main className='w-full'>
        <Header />
        <SectionReveal duration={800}>
          <Presentation />
        </SectionReveal>
        <SectionReveal
          direction='left'
          delay={100} 
          duration={800}>
          <Studies />
        </SectionReveal>
        <SectionReveal
          delay={80}
          duration={800}
        >
          <Experience />
        </SectionReveal>
        <SectionReveal
          direction='right'
          delay={200}
          duration={800}>
          <DevelopmentTools />
        </SectionReveal>
        <SectionReveal
          delay={200}
          duration={800}>
          <Projects />
        </SectionReveal>
        <SectionReveal
          direction='left'
          distance={50}
          delay={100}
          duration={800}>
          <Contact />
        </SectionReveal>
        <Footer />
      </main>
    </>
  )
};

export default App;
