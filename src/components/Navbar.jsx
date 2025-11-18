import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const totalQuantity = useSelector((state) => state.favorites.items.length)
  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-md">
            CS
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
              CaféCanvas
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-300 -mt-1">
              Freshly brewed everyday
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors px-2 py-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold shadow hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Reserve
          </button>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
            title="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-11H21m-18 0H3m15.36 7.36l.7.7M4.93 5.07l.7.7m12.02 0l.7-.7M4.93 18.93l.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>

          {/* Favorites */}
          <button
            className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
            title="Favorites"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {totalQuantity}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-200"
            >
              {link.label}
            </a>
          ))}
          <button className="mt-2 px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold shadow hover:shadow-lg transition-all">
            Reserve
          </button>
        </div>
      </div>
    </header>
  )
}
