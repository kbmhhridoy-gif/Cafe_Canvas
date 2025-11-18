import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="rounded-lg overflow-hidden h-44">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 flex-1">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.tags.join(' • ')}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-amber-600 font-bold text-lg">
          ${product.price.toFixed(2)}
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="px-3 py-2 rounded-md bg-amber-500 text-white font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  )
}
