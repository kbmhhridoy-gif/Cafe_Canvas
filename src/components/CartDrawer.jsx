import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  changeQuantity,
  clearCart,
} from '../features/cartSlice'

export default function CartDrawer() {
  const [open, setOpen] = useState(false)
  const cart = useSelector((s) => s.cart)
  const dispatch = useDispatch()

  return (
    <div className="fixed right-6 bottom-6 z-40">
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-amber-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        Cart ({cart.totalQuantity})
      </button>

      {open && (
        <div className="mt-3 w-96 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="font-bold">Your Order</div>
            <button onClick={() => setOpen(false)} className="text-gray-500">
              Close
            </button>
          </div>

          <div className="p-4 max-h-80 overflow-auto">
            {cart.items.length === 0 && (
              <div className="text-gray-500">Your cart is empty.</div>
            )}
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 py-3 border-b last:border-b-0"
              >
                <div className="w-12 h-12 rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt={item.name}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        changeQuantity({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    className="w-16 p-1 border rounded"
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">Total</div>
              <div className="font-bold text-lg">
                ${cart.totalPrice.toFixed(2)}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(clearCart())}
                className="flex-1 px-4 py-2 rounded-lg border"
              >
                Clear
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-amber-500 text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
