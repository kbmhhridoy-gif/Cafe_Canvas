import React, { useState, useEffect } from 'react'

const heroImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1600&q=80',
  'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1600&q=80',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden pt-24">
      {/* Background Slideshow */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Decorative Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-600 animate-fadeIn">
            CaféCanvas
          </h1>
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-200 animate-fadeIn delay-200">
            Wake up to the aroma — specialty brews made with care. Cozy space,
            local pastries, friendly baristas.
          </p>
          <div className="flex gap-4 mt-6 animate-fadeIn delay-400">
            <a className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              See Menu
            </a>
            <a className="px-6 py-3 border-2 border-amber-400 text-amber-100 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300">
              Contact
            </a>
          </div>

          {/* Info Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeIn delay-600">
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-xl p-4 text-center shadow-lg">
              <h4 className="font-bold text-lg text-white">Open Hours</h4>
              <p className="text-gray-200">Mon-Sun: 7AM - 10PM</p>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-xl p-4 text-center shadow-lg">
              <h4 className="font-bold text-lg text-white">Best Seller</h4>
              <p className="text-gray-200">Caramel Latte</p>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-xl p-4 text-center shadow-lg">
              <h4 className="font-bold text-lg text-white">New Arrival</h4>
              <p className="text-gray-200">Pumpkin Spice Latte</p>
            </div>
          </div>
        </div>

        {/* Foreground Hero Image */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://i.ibb.co/ds5JXxBc/9.jpg"
            alt="coffee"
            className="w-full h-80 md:h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-25 transition-opacity duration-500 rounded-3xl"></div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% {opacity: 0; transform: translateY(20px);}
            100% {opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }

          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 12s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  )
}
