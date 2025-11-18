import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            CaféCanvas
          </h2>
          <p className="text-gray-400 text-sm">
            Specialty coffee, cozy vibes, and freshly baked pastries. Wake up
            with us!
          </p>
          <div className="flex gap-3 mt-3">
            {/* Social icons */}
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149 4.916 4.916 0 003.195 9.723a4.902 4.902 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.817 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.593 3.417A9.867 9.867 0 010 21.542a13.945 13.945 0 007.548 2.209c9.058 0 14.009-7.512 14.009-14.009 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.452C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0zM7.09 20.452H3.545V9h3.545v11.452zM5.318 7.633a2.053 2.053 0 110-4.106 2.053 2.053 0 010 4.106zm15.134 12.819h-3.546v-5.518c0-1.312-.024-3-1.826-3-1.826 0-2.106 1.426-2.106 2.897v5.62H9.431V9h3.403v1.561h.048c.474-.899 1.632-1.846 3.36-1.846 3.594 0 4.259 2.366 4.259 5.44v6.297z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#menu" className="hover:text-amber-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-amber-400 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">123 Coffee St, Bean City, CO</p>
          <p className="text-gray-400 text-sm mt-1">Mon - Fri: 7am - 7pm</p>
          <p className="text-gray-400 text-sm">Sat - Sun: 8am - 5pm</p>
          <a
            href="mailto:info@cafecanvas.com"
            className="text-amber-400 hover:text-amber-500 mt-2 block text-sm transition"
          >
            info@cafecanvas.com
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CaféCanvas. All rights reserved.
      </div>
    </footer>
  )
}
