import { createSlice } from '@reduxjs/toolkit'

const initialFavorites = (() => {
  try {
    const raw = localStorage.getItem('favorites')
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  return { items: [] }
})()

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavorites,
  reducers: {
    addFavorite(state, action) {
      const id = action.payload
      if (!state.items.includes(id)) state.items.push(id)
      localStorage.setItem('favorites', JSON.stringify(state))
    },
    removeFavorite(state, action) {
      const id = action.payload
      state.items = state.items.filter((i) => i !== id)
      localStorage.setItem('favorites', JSON.stringify(state))
    },
    toggleFavorite(state, action) {
      const id = action.payload
      if (state.items.includes(id))
        state.items = state.items.filter((i) => i !== id)
      else state.items.push(id)
      localStorage.setItem('favorites', JSON.stringify(state))
    },
  },
})

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoritesSlice.actions
export default favoritesSlice.reducer
