import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: true,
  savedVideosList: [],
  addVideoItem: () => {},
  changeTheme: () => {},
})

export default ThemeContext
