import React from 'react'

const ThemeContext = React.createContext({
  isDark: true,
  savedVideosList: [],
  addVideoItem: () => {},
  changeTheme: () => {},
})

export default ThemeContext
