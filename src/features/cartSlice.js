import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const existing = state.items.find((i) => i.id === item.id)
      state.totalQuantity += 1
      state.totalPrice += item.price

      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      const idx = state.items.findIndex((i) => i.id === id)
      if (idx >= 0) {
        const item = state.items[idx]
        state.totalQuantity -= item.quantity
        state.totalPrice -= item.price * item.quantity
        state.items.splice(idx, 1)
      }
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (!item) return
      state.totalQuantity += quantity - item.quantity
      state.totalPrice += (quantity - item.quantity) * item.price
      item.quantity = quantity
      if (item.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id)
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
  },
})

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
