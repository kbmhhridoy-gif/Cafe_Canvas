import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-500">
            About Us
          </h3>
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            CaféCanvas started as a small neighborhood coffee project — a place
            where{' '}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
              art, conversation, and great coffee
            </span>{' '}
            meet. We source responsibly and roast in small batches to highlight
            unique flavors.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {[
              'Single-origin beans',
              'Fresh pastries',
              'Cozy interior',
              'Friendly baristas',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full inline-block"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=1200&q=80"
            alt="about cafe"
            className="w-full h-80 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-3xl"></div>
        </div>
      </div>
    </section>
  )
}
