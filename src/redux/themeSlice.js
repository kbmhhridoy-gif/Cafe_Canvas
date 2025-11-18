import { createSlice } from '@reduxjs/toolkit'

const initialTheme = (() => {
  try {
    const raw = localStorage.getItem('theme')
    if (raw) return JSON.parse(raw)
  } catch (e) {}
  return { mode: 'light' }
})()

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    setDark(state) {
      state.mode = 'dark'
      localStorage.setItem('theme', JSON.stringify(state))
      document.documentElement.classList.add('dark')
    },
    setLight(state) {
      state.mode = 'light'
      localStorage.setItem('theme', JSON.stringify(state))
      document.documentElement.classList.remove('dark')
    },
    toggle(state) {
      if (state.mode === 'dark') {
        state.mode = 'light'
        document.documentElement.classList.remove('dark')
      } else {
        state.mode = 'dark'
        document.documentElement.classList.add('dark')
      }
      localStorage.setItem('theme', JSON.stringify(state))
    },
  },
})

export const { setDark, setLight, toggle } = themeSlice.actions
export default themeSlice.reducer
