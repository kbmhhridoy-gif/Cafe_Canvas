import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../redux/themeSlice'
import { Menu, X, Heart, Sun, Moon } from 'lucide-react'

export default function Header() {
  const favorites = useSelector((s) => s.favorites.items)
  const theme = useSelector((s) => s.theme.mode)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed w-full z-40 top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold">
            CS
          </div>
          <div className="hidden sm:block">
            <div className="font-bold">CaféCanvas</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Freshly brewed
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollTo('hero')}
            className="hover:text-amber-500"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className="hover:text-amber-500"
          >
            Menu
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-amber-500"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('testimonials')}
            className="hover:text-amber-500"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-amber-500"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(toggle())}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="relative">
            <Heart size={20} />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo('hero')} className="text-left">
              Home
            </button>
            <button onClick={() => scrollTo('menu')} className="text-left">
              Menu
            </button>
            <button onClick={() => scrollTo('about')} className="text-left">
              About
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="text-left"
            >
              Testimonials
            </button>
            <button onClick={() => scrollTo('contact')} className="text-left">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
