import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { Toaster } from "@/components/ui/toaster"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Modules } from "@/pages/Modules"
import { Team } from "@/pages/Team"
import { Contact } from "@/pages/Contact"
import { LettersOfRecommendation } from "@/pages/LettersOfRecommendation"
import { Media } from "@/pages/Media"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/letters-of-recommendation" element={<LettersOfRecommendation />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </Router>
  )
}

export default App

