import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  addVideoItem: () => {},
  changeTheme: () => {},
})

export default ThemeContext
