import About from "@/components/About"
import Contact from "@/components/Contact"
import Home from "@/components/Home"
import Projects from "@/components/Projects"

export default function Container() {
  return (
    <main className="flex min-h-screen scroll-smooth flex-col items-center">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
