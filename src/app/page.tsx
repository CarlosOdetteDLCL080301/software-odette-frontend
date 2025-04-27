import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { WorkExperience } from "@/components/WorkExperience"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { CustomCursor } from "@/ui/CustomCursor"

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Header />
      <Hero />
      <WorkExperience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
