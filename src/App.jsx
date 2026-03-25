import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Projects } from './components/Projects';
import { DevelopmentTools } from './components/DevelopmentTools';
import { Studies } from './components/Studies';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <main className='w-full'>
        <Header />
        <Presentation />
        <Studies />
        <Experience />
        <DevelopmentTools />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
};

export default App;
