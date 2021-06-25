import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'suno-light',
    values: [
      {
        name: 'suno-light',
        value: theme.colors.white
      },
      {
        name: 'suno-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
