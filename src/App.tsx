import React from 'react'
import { ThemeProvider } from 'styled-components'
import Main from './components/Main'
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

export default App
