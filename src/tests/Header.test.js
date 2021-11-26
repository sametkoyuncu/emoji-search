import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '../Header'

describe('Header Test', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('Emoji Search ve iki tane image dökümanda bulunmalı.', () => {
    const searchText = screen.getAllByText(/Emoji Search/i)
    const images = screen.getAllByAltText('')
    expect(searchText.length).toEqual(1)
    expect(images.length).toEqual(2)
  })
})
