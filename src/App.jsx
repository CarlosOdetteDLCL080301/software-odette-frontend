import { ThemeProvider } from "./ui/ThemeProvider"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { WorkExperience } from "./components/WorkExperience"
import { Projects } from "./components/Projects"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { CustomCursor } from "./ui/CustomCursor"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
    </ThemeProvider>
  )
}

export default App
