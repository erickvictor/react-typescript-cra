import React from 'react'
import 'babel-polyfill'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '../../utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="search" />)

    expect(screen.getByPlaceholderText('search')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField onInput={onInput} id="TextField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWithTheme(<TextField data-testid="TextField" id="TextField" />)

    const input = screen.getByTestId('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
