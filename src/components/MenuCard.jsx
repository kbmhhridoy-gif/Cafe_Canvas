import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Heart } from 'lucide-react'
import { toggleFavorite } from '../redux/favoritesSlice'

export default function MenuCard({ item }) {
  const dispatch = useDispatch()
  const favorites = useSelector((s) => s.favorites.items)
  const favored = favorites.includes(item.id)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-md ${
            item.category === 'Hot'
              ? 'bg-red-500 text-white'
              : 'bg-blue-500 text-white'
          }`}
        >
          {item.category}
        </span>
        {/* "New" or "Popular" Badge (example) */}
        {item.price && parseFloat(item.price.slice(1)) > 5 && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-md">
            Popular
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {item.price}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {item.description ||
              'A delightful coffee experience to energize your day.'}
          </p>
        </div>

        {/* Favorite Button */}
        <div className="flex justify-between items-center ">
          <button
            onClick={() => dispatch(toggleFavorite(item.id))}
            aria-label="Toggle favorite"
            className={`p-2 rounded-full transition-all duration-300 ${
              favored
                ? 'bg-amber-100 text-amber-600 dark:bg-amber-600 dark:text-white'
                : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
          {/* Optional rating or small info */}
          <div className="text-xs text-gray-500 dark:text-gray-400">⭐ 4.8</div>
        </div>
      </div>
    </div>
  )
}
