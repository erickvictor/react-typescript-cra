import GlobalStyles from '../src/styles/global'

export const parameters = {
  layout: 'fullscreen',
};


export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
