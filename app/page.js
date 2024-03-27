import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Home from '@/components/Home';
import MobileMenu from '@/components/MobileMenu';
import Projects from '@/components/Projects';

export default function Container() {
  return (
    <main className="flex min-h-screen scroll-smooth flex-col items-center">
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <MobileMenu />
    </main>
  );
}
