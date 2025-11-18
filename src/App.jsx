import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

export default function App() {
  const theme = useSelector((s) => s.theme.mode)

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="pt-20">
        <Hero />
        <section className="max-w-6xl mx-auto px-4 py-12">
          <MenuSection />
        </section>
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
