import AboutMe from './components/AboutMe'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="w-screen h-full bg-base text-text">
      <Hero />
      {/* header */}
      <AboutMe />
    </main>
  )
}
